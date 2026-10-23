"""Offline protocol, paid-submission recovery and CDN integrity tests."""

import importlib.util
import io
import json
from pathlib import Path
import struct
import tempfile
import unittest
from unittest.mock import Mock, patch
import urllib.error
import urllib.request
import zlib


spec = importlib.util.spec_from_file_location("hunyuan_assets", Path(__file__).parents[1] / "scripts/hunyuan_assets.py")
pipeline = importlib.util.module_from_spec(spec)
spec.loader.exec_module(pipeline)


def png(width=128, height=128):
    def chunk(kind, data):
        return struct.pack(">I", len(data)) + kind + data + struct.pack(">I", zlib.crc32(kind + data) & 0xffffffff)
    header = struct.pack(">IIBBBBB", width, height, 8, 2, 0, 0, 0)
    pixels = (b"\0" + b"\x88\xaa\x66" * width) * height
    return b"\x89PNG\r\n\x1a\n" + chunk(b"IHDR", header) + chunk(b"IDAT", zlib.compress(pixels)) + chunk(b"IEND", b"")


def triangle_scene():
    binary = struct.pack("<9f3H", 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 2)
    return {
        "asset": {"version": "2.0"},
        "buffers": [{"byteLength": len(binary)}],
        "bufferViews": [{"buffer": 0, "byteOffset": 0, "byteLength": 36}, {"buffer": 0, "byteOffset": 36, "byteLength": 6}],
        "accessors": [{"bufferView": 0, "componentType": 5126, "count": 3, "type": "VEC3"}, {"bufferView": 1, "componentType": 5123, "count": 3, "type": "SCALAR"}],
        "meshes": [{"primitives": [{"attributes": {"POSITION": 0}, "indices": 1}]}],
    }, binary


def glb(scene=None, binary=None):
    if scene is None:
        scene, binary = triangle_scene()
    content = json.dumps(scene, separators=(",", ":")).encode()
    content += b" " * (-len(content) % 4)
    binary = binary or b""
    binary += b"\0" * (-len(binary) % 4)
    chunks = struct.pack("<I4s", len(content), b"JSON") + content
    if binary:
        chunks += struct.pack("<I4s", len(binary), b"BIN\0") + binary
    return struct.pack("<4sII", b"glTF", 2, 12 + len(chunks)) + chunks


def completed():
    return {
        "Status": "DONE",
        "RequestId": "query-request",
        "ResultCreditConsumed": 20,
        "ResultCreditDetails": "Generate-Normal:20",
        "ResultFile3Ds": [
            {"Type": "OBJ", "Url": "https://cdn.example/asset.obj"},
            {"Type": "GLB", "Url": "https://cdn.example/asset.glb?signature=private"},
        ],
    }


class Response:
    def __init__(self, body, headers=None, url="https://cdn.example/asset.glb?signature=private"):
        self.stream = io.BytesIO(body)
        self.headers = headers if headers is not None else {"Content-Length": str(len(body))}
        self.url = url

    def __enter__(self):
        return self

    def __exit__(self, *_):
        return False

    def read(self, size):
        return self.stream.read(size)

    def geturl(self):
        return self.url


class HunyuanAssetTests(unittest.TestCase):
    def setUp(self):
        self.temporary = tempfile.TemporaryDirectory()
        self.addCleanup(self.temporary.cleanup)
        self.root = Path(self.temporary.name)
        root_patch = patch.object(pipeline, "ROOT", self.root)
        root_patch.start()
        self.addCleanup(root_patch.stop)
        output = patch("sys.stdout", new_callable=io.StringIO)
        self.output = output.start()
        self.addCleanup(output.stop)
        self.asset = {
            "id": "flower-arch",
            "label": "花海拱门",
            "imagePath": "art-direction/flower-sea/references/flower-arch.png",
            "faceCount": 20000,
            "worldHeight": 4.5,
            "outputPath": "public/assets/flower-sea/flower-arch.glb",
        }
        image = self.root / self.asset["imagePath"]
        image.parent.mkdir(parents=True)
        image.write_bytes(png())
        self.write_plan([self.asset])

    def write_plan(self, assets):
        path = self.root / pipeline.PLAN
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text(json.dumps({"assets": assets}), encoding="utf-8")

    def fake_download(self, url, path):
        self.assertEqual(url, completed()["ResultFile3Ds"][1]["Url"])
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_bytes(glb())
        return pipeline.validate_glb(path)

    def client(self, queries=None):
        client = Mock()
        client.submit.return_value = {"JobId": "existing-job", "RequestId": "submit-request"}
        client.query.side_effect = queries or [completed()]
        return client

    def receipt(self):
        return json.loads(pipeline.receipt_path(self.asset).read_text())

    def test_plan_is_offline_and_does_not_inspect_environment(self):
        class UnreadableEnvironment(dict):
            def get(self, name, default=None):
                if name.startswith("TENCENTCLOUD_"):
                    raise AssertionError("Offline plan must not inspect credentials")
                return default
        with patch.object(pipeline.os, "environ", UnreadableEnvironment()), patch.object(pipeline, "HunyuanClient", side_effect=AssertionError("No SDK")):
            pipeline.main(["plan"])
        self.assertIn("no SDK, credentials, API requests or charges", self.output.getvalue())
        self.assertIn("later Blender target=public/assets/flower-sea/flower-arch.glb", self.output.getvalue())
        self.assertFalse((self.root / pipeline.JOBS).exists())

    def test_plan_rejects_duplicate_ids_invalid_budget_and_path_escape(self):
        for assets in ([self.asset, self.asset], [{**self.asset, "faceCount": 500}], [{**self.asset, "imagePath": "../outside.png"}], [{**self.asset, "worldHeight": float("nan")}]):
            with self.subTest(assets=assets):
                self.write_plan(assets)
                with self.assertRaises(pipeline.AssetError):
                    pipeline.load_plan()

    def test_symlink_reference_cannot_leave_root(self):
        link = self.root / "outside"
        link.symlink_to(self.root.parent, target_is_directory=True)
        with self.assertRaises(pipeline.AssetError):
            pipeline.rooted("outside/reference.png")

    def test_payload_matches_pro_image_api_and_omits_result_format(self):
        payload, source = pipeline.image_payload(self.asset)
        self.assertEqual({key: value for key, value in payload.items() if key != "ImageBase64"}, {"Model": "3.1", "GenerateType": "Normal", "EnablePBR": True, "FaceCount": 20000})
        self.assertFalse(payload["ImageBase64"].startswith("data:"))
        self.assertEqual(len(source["image_sha256"]), 64)
        self.assertNotIn("Prompt", payload)
        self.assertNotIn("ResultFormat", payload)

    def test_bad_or_oversized_png_never_reaches_paid_submit(self):
        image = self.root / self.asset["imagePath"]
        for body in (b"not png", png(127, 128), b"0" * (pipeline.MAX_IMAGE_BYTES + 1)):
            image.write_bytes(body)
            factory = Mock()
            with self.assertRaises(pipeline.AssetError):
                pipeline.generate([self.asset], client_factory=factory)
            factory.assert_not_called()
            self.assertFalse(pipeline.receipt_path(self.asset).exists())

    def test_job_id_is_persisted_before_first_query_and_resume_never_submits_twice(self):
        client = self.client()

        def disconnected_query(job_id):
            saved = self.receipt()
            self.assertEqual(saved["job_id"], job_id)
            self.assertEqual(saved["submit_request_id"], "submit-request")
            raise pipeline.AssetError("query disconnected")

        client.query.side_effect = disconnected_query
        with self.assertRaisesRegex(pipeline.AssetError, "disconnected"):
            pipeline.generate([self.asset], client_factory=lambda: client)
        client.query.side_effect = [completed()]
        with patch.object(pipeline, "download_model", side_effect=self.fake_download):
            pipeline.generate([self.asset], client_factory=lambda: client)
        pipeline.generate([self.asset], client_factory=Mock(side_effect=AssertionError("No API for existing raw asset")))
        self.assertEqual(client.submit.call_count, 1)
        self.assertEqual(client.query.call_count, 2)
        saved = self.receipt()
        self.assertEqual(saved["state"], "downloaded")
        self.assertEqual(saved["raw_path"], "artifacts/hunyuan/raw/flower-arch.glb")
        self.assertEqual(saved["credit_consumed"], 20)
        self.assertEqual(saved["last_query_request_id"], "query-request")
        self.assertNotIn("signature", json.dumps(saved))
        self.assertFalse((self.root / self.asset["outputPath"]).exists())
        self.assertEqual(pipeline.receipt_path(self.asset).stat().st_mode & 0o777, 0o600)
        self.assertEqual(pipeline.receipt_path(self.asset).parent.stat().st_mode & 0o777, 0o700)

    def test_submission_timeout_is_marked_before_call_and_never_resubmitted(self):
        client = self.client()

        def timeout(payload):
            self.assertEqual(self.receipt()["state"], "submission_uncertain")
            self.assertNotIn("ImageBase64", json.dumps(self.receipt()))
            raise pipeline.AssetError("Submission outcome is uncertain")

        client.submit.side_effect = timeout
        with self.assertRaisesRegex(pipeline.AssetError, "uncertain"):
            pipeline.generate([self.asset], client_factory=lambda: client)
        for _ in range(2):
            with self.assertRaisesRegex(pipeline.AssetError, "uncertain"):
                pipeline.generate([self.asset], client_factory=Mock(side_effect=AssertionError("No API client needed")))
        self.assertEqual(client.submit.call_count, 1)
        client.query.assert_not_called()
        self.assertFalse((self.root / pipeline.JOBS / "pipeline.lock").exists())

    def test_response_without_job_id_cannot_trigger_paid_resubmission(self):
        client = self.client()
        client.submit.return_value = {"RequestId": "ambiguous-response"}
        for _ in range(2):
            with self.assertRaisesRegex(pipeline.AssetError, "uncertain"):
                pipeline.generate([self.asset], client_factory=lambda: client)
        self.assertEqual(client.submit.call_count, 1)
        self.assertEqual(self.receipt()["submit_request_id"], "ambiguous-response")

    def test_poll_timeout_keeps_job_and_next_run_resumes(self):
        client = self.client([{"Status": "RUN", "RequestId": "running-query"}, completed()])
        with self.assertRaisesRegex(pipeline.AssetError, "Polling timed out"):
            pipeline.generate([self.asset], client_factory=lambda: client, poll_timeout=0)
        self.assertEqual(self.receipt()["state"], "running")
        with patch.object(pipeline, "download_model", side_effect=self.fake_download):
            pipeline.generate([self.asset], client_factory=lambda: client)
        self.assertEqual(client.submit.call_count, 1)

    def test_provider_failure_is_saved_and_is_not_recreated(self):
        failure = {"Status": "FAIL", "ErrorCode": "FailedOperation", "ErrorMessage": "Provider reason", "RequestId": "failed-query"}
        client = self.client([failure, failure])
        for _ in range(2):
            with self.assertRaisesRegex(pipeline.AssetError, "provider task failed"):
                pipeline.generate([self.asset], client_factory=lambda: client)
        self.assertEqual(client.submit.call_count, 1)
        self.assertEqual(self.receipt()["error_code"], "FailedOperation")
        self.assertEqual(self.receipt()["error_message"], "Provider reason")

    def test_download_failure_resumes_same_task(self):
        client = self.client([completed(), completed()])
        with patch.object(pipeline, "download_model", side_effect=pipeline.AssetError("CDN unavailable")):
            with self.assertRaisesRegex(pipeline.AssetError, "CDN unavailable"):
                pipeline.generate([self.asset], client_factory=lambda: client)
        self.assertEqual(self.receipt()["state"], "ready")
        with patch.object(pipeline, "download_model", side_effect=self.fake_download):
            pipeline.generate([self.asset], client_factory=lambda: client)
        self.assertEqual(client.submit.call_count, 1)

    def test_status_queries_saved_job_without_submitting(self):
        pipeline.save_receipt(self.asset, {"asset_id": self.asset["id"], "state": "submitted", "job_id": "saved-job"})
        client = self.client([completed()])
        pipeline.show_status([self.asset], client_factory=lambda: client)
        client.submit.assert_not_called()
        client.query.assert_called_once_with("saved-job")
        self.assertEqual(self.receipt()["credit_consumed"], 20)
        self.assertFalse((self.root / pipeline.RAW).exists())
        self.assertNotIn("signature", self.output.getvalue())

    def test_status_uncertain_and_missing_receipts_need_no_credentials(self):
        factory = Mock(side_effect=AssertionError("No API for unknown jobs"))
        pipeline.show_status([self.asset], client_factory=factory)
        pipeline.save_receipt(self.asset, {"asset_id": self.asset["id"], "state": "submission_uncertain"})
        pipeline.show_status([self.asset], client_factory=factory)
        factory.assert_not_called()
        self.assertIn("not submitted", self.output.getvalue())
        self.assertIn("outcome uncertain", self.output.getvalue())

    def test_default_limit_is_one_and_hard_maximum_is_three(self):
        assets = [{**self.asset, "id": "flower-" + str(index)} for index in range(4)]
        client = self.client([completed()] * 4)
        with patch.object(pipeline, "download_model", side_effect=self.fake_download):
            pipeline.generate(assets, client_factory=lambda: client)
        self.assertEqual(client.submit.call_count, 1)
        with self.assertRaises(pipeline.AssetError):
            pipeline.generate(assets, limit=4, client_factory=lambda: client)
        with patch.object(pipeline, "download_model", side_effect=self.fake_download):
            pipeline.generate(assets[1:], limit=3, client_factory=lambda: client)
        self.assertEqual(client.submit.call_count, 4)

    def test_lock_prevents_concurrent_submissions(self):
        with pipeline.task_lock():
            with self.assertRaisesRegex(pipeline.AssetError, "holds the lock"):
                pipeline.generate([self.asset], client_factory=Mock(side_effect=AssertionError("Locked")))

    def test_glb_checks_entire_container_and_embedded_buffer_bounds(self):
        path = self.root / "model.glb"
        path.write_bytes(glb())
        self.assertEqual(len(pipeline.validate_glb(path)), 64)
        corruptions = [b"<html>CDN error</html>", glb()[:-4], glb() + b"trailing"]
        for field, value in (("buffers", [{"byteLength": 9000}]), ("bufferViews", [{"buffer": 0, "byteOffset": 9000, "byteLength": 36}]), ("images", [{"uri": "https://cdn.example/texture.png"}]), ("meshes", [{"primitives": []}])):
            scene, binary = triangle_scene()
            scene[field] = value
            corruptions.append(glb(scene, binary))
        scene, binary = triangle_scene()
        scene["accessors"][0]["count"] = 9000
        corruptions.append(glb(scene, binary))
        # Header matches the file size, but a second chunk claims extra bytes.
        broken = bytearray(glb())
        json_size = struct.unpack("<I", broken[12:16])[0]
        struct.pack_into("<I", broken, 20 + json_size, 999999)
        corruptions.append(bytes(broken))
        for body in corruptions:
            with self.subTest(length=len(body)):
                path.write_bytes(body)
                with self.assertRaises(pipeline.AssetError):
                    pipeline.validate_glb(path)

    def test_cdn_download_never_receives_cloud_authentication(self):
        seen = []
        body = glb()
        opener = Mock()

        def open_request(request, timeout):
            seen.append(request)
            return Response(body)

        opener.open.side_effect = open_request
        target = self.root / "raw/model.glb"
        # A fake environment must remain unused by the independent CDN path.
        with patch.object(pipeline.os, "environ", {"TENCENTCLOUD_SECRET_ID": "private-id", "TENCENTCLOUD_SECRET_KEY": "private-key", "TENCENTCLOUD_TOKEN": "private-token"}), patch.object(pipeline.urllib.request, "build_opener", return_value=opener):
            sha256 = pipeline.download_model("https://cdn.example/asset.glb?signature=private", target)
        self.assertEqual(sha256, pipeline.validate_glb(target))
        headers = json.dumps(dict(seen[0].header_items())).lower()
        for forbidden in ("authorization", "x-tc-token", "private-key", "private-id", "private-token", "cookie"):
            self.assertNotIn(forbidden, headers)
        self.assertNotIn("signature", self.output.getvalue())

    def test_cdn_redirect_enforces_https_and_drops_credentials(self):
        handler = pipeline.SafeRedirect()
        request = urllib.request.Request("https://first.example/a", headers={"Authorization": "should-not-exist", "Cookie": "private", "X-TC-Token": "private"})
        redirected = handler.redirect_request(request, None, 302, "Found", {}, "https://second.example/a")
        self.assertTrue({name.lower() for name, _ in redirected.header_items()}.isdisjoint({"authorization", "cookie", "x-tc-token"}))
        with self.assertRaises(pipeline.AssetError):
            handler.redirect_request(request, None, 302, "Found", {}, "http://second.example/a")
        for url in ("http://cdn.example/a", "https://user:password@cdn.example/a", "https://127.0.0.1/a", "https://cdn.example:444/a"):
            with self.assertRaises(pipeline.AssetError):
                pipeline.checked_https(url)

    def test_bad_download_preserves_previous_file_and_removes_temporary(self):
        target = self.root / "raw/model.glb"
        target.parent.mkdir(parents=True)
        target.write_bytes(glb())
        old = target.read_bytes()
        cases = [Response(b"not a model"), Response(glb(), {"Content-Length": str(pipeline.MAX_DOWNLOAD_BYTES + 1)}), Response(glb(), {"Content-Length": str(len(glb()) + 1)})]
        for response in cases:
            opener = Mock()
            opener.open.return_value = response
            with patch.object(pipeline.urllib.request, "build_opener", return_value=opener):
                with self.assertRaises(pipeline.AssetError):
                    pipeline.download_model("https://cdn.example/model.glb?secret=must-not-log", target)
            self.assertEqual(target.read_bytes(), old)
            self.assertEqual(list(target.parent.glob("*.download")), [])

    def test_streaming_download_limit_works_without_content_length(self):
        opener = Mock()
        opener.open.return_value = Response(b"x" * 64, headers={})
        with patch.object(pipeline, "MAX_DOWNLOAD_BYTES", 32), patch.object(pipeline.urllib.request, "build_opener", return_value=opener):
            with self.assertRaisesRegex(pipeline.AssetError, "exceeds"):
                pipeline.download_model("https://cdn.example/model.glb", self.root / "raw/model.glb")
        self.assertFalse((self.root / "raw/model.glb").exists())

    def test_download_error_does_not_expose_signed_url(self):
        opener = Mock()
        opener.open.side_effect = urllib.error.URLError("https://cdn.example/model.glb?signature=private-key")
        with patch.object(pipeline.urllib.request, "build_opener", return_value=opener):
            with self.assertRaises(pipeline.AssetError) as caught:
                pipeline.download_model("https://cdn.example/model.glb?signature=private-key", self.root / "model.glb")
        self.assertNotIn("private-key", str(caught.exception))


class OriginalAi3dKeyTests(unittest.TestCase):
    def test_original_key_stays_on_its_own_host_and_uses_documented_image_data_uri(self):
        seen = []
        opener = Mock()
        def request(req, timeout):
            seen.append(req)
            return Response(json.dumps({"Response": {"JobId": "original-job", "RequestId": "request"}}).encode())
        opener.open.side_effect = request
        with patch.object(pipeline.os, "environ", {"HUNYUAN_API_KEY": "test-original-key"}), patch.object(pipeline.urllib.request, "build_opener", return_value=opener):
            result = pipeline.Ai3dKeyClient().submit({"Model": "3.1", "ImageBase64": "aW1hZ2U=", "GenerateType": "Normal", "EnablePBR": True, "FaceCount": 24000})
        self.assertEqual(result["JobId"], "original-job")
        self.assertEqual(len(seen), 1)
        self.assertEqual(seen[0].full_url, "https://api.ai3d.cloud.tencent.com/v1/ai3d/submit")
        self.assertEqual(seen[0].get_header("Authorization"), "test-original-key")
        body = json.loads(seen[0].data)
        self.assertEqual(body["ImageUrl"], {"Url": "data:image/png;base64,aW1hZ2U="})
        self.assertNotIn("ImageBase64", body)
        self.assertNotIn("ResultFormat", body)

    def test_original_query_never_submits_and_api_redirects_do_not_forward_keys(self):
        client = object.__new__(pipeline.Ai3dKeyClient)
        client._request = Mock(return_value={"Status": "RUN"})
        self.assertEqual(client.query("saved-job"), {"Status": "RUN"})
        client._request.assert_called_once_with("/query", {"JobId": "saved-job"})
        req = urllib.request.Request("https://api.ai3d.cloud.tencent.com/v1/ai3d/submit", headers={"Authorization": "test-original-key"})
        self.assertIsNone(pipeline.NoApiRedirect().redirect_request(req, None, 302, "Found", {}, "https://other.example"))

    def test_original_key_is_not_inferred_from_another_providers_binding(self):
        with patch.object(pipeline.os, "environ", {"TOKENHUB_API_KEY": "different-provider-key"}):
            with self.assertRaisesRegex(pipeline.AssetError, "HUNYUAN_API_KEY"):
                pipeline.Ai3dKeyClient()

    def test_original_api_errors_never_echo_server_or_key_content(self):
        opener = Mock()
        opener.open.side_effect = urllib.error.URLError("upstream echoed test-private-key")
        with patch.object(pipeline.os, "environ", {"HUNYUAN_API_KEY": "test-private-key"}), patch.object(pipeline.urllib.request, "build_opener", return_value=opener):
            with self.assertRaisesRegex(pipeline.AssetError, "uncertain") as caught:
                pipeline.Ai3dKeyClient().submit({"Model": "3.1", "ImageBase64": "aW1hZ2U=", "GenerateType": "Normal", "EnablePBR": True, "FaceCount": 24000})
        self.assertNotIn("test-private-key", str(caught.exception))
        self.assertEqual(opener.open.call_count, 1)


if __name__ == "__main__":
    unittest.main()
