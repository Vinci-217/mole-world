import importlib.util
import json
from pathlib import Path
import struct
import tempfile
import io
import unittest
from unittest.mock import patch

spec = importlib.util.spec_from_file_location('tripo_assets', Path(__file__).parents[1] / 'scripts/tripo_assets.py')
pipeline = importlib.util.module_from_spec(spec)
spec.loader.exec_module(pipeline)


def tiny_glb():
    content = json.dumps({'asset': {'version': '2.0'}, 'meshes': [{'primitives': []}]}).encode()
    content += b' ' * (-len(content) % 4)
    return struct.pack('<4sIII4s', b'glTF', 2, 20 + len(content), len(content), b'JSON') + content


class AssetPipelineTests(unittest.TestCase):
    def setUp(self):
        self.output = patch('sys.stdout', new_callable=io.StringIO)
        self.output.start()
        self.addCleanup(self.output.stop)

    def test_rejects_incomplete_and_non_model_downloads(self):
        with tempfile.TemporaryDirectory() as folder:
            path = Path(folder) / 'asset.glb'
            for content in [b'<html>error</html>', struct.pack('<4sII', b'glTF', 2, 12), tiny_glb()[:-4]]:
                path.write_bytes(content)
                with self.assertRaises(pipeline.AssetError):
                    pipeline.validate_glb(path)
            path.write_bytes(tiny_glb())
            pipeline.validate_glb(path)

    def test_real_bundled_models_are_valid(self):
        root = Path(__file__).parents[1]
        manifest = json.loads((root / 'public/assets/manifest.json').read_text())
        self.assertGreaterEqual(len(manifest['assets']), 1)
        self.assertIn('mole-castle', [asset['id'] for asset in manifest['assets']])
        for asset in manifest['assets']:
            pipeline.validate_glb(root / 'public' / asset['path'].lstrip('/'))

    def test_download_does_not_forward_api_authorization(self):
        seen = []

        class Response:
            def __enter__(self): return self
            def __exit__(self, *_): return False
            def read(self, _):
                if getattr(self, 'read_once', False): return b''
                self.read_once = True
                return tiny_glb()

        class Opener:
            def open(self, request, timeout):
                seen.append(request)
                return Response()

        with tempfile.TemporaryDirectory() as folder, patch.object(pipeline.urllib.request, 'build_opener', return_value=Opener()):
            pipeline.download_model('https://asset-cdn.example/generated.glb?signature=test', Path(folder) / 'asset.glb')
        self.assertEqual(len(seen), 1)
        self.assertFalse(seen[0].has_header('Authorization'))
        with self.assertRaises(pipeline.AssetError):
            pipeline.download_model('http://asset-cdn.example/asset.glb', Path('/tmp/unused.glb'))

    def test_interrupted_generation_resumes_without_another_paid_post(self):
        with tempfile.TemporaryDirectory() as folder:
            root = Path(folder)
            manifest = root / 'public/assets/manifest.json'
            manifest.parent.mkdir(parents=True)
            manifest.write_text('{"assets": []}')
            asset = {'id':'castle','prompt':'a manor','face_limit':1000,'width':20,'position':[0,0,0],'rotation':0,'replace':'castle'}
            plan = {'model':'v3.1-20260211','style':'weathered limestone'}
            posts = []
            requests = []
            fail = [True]

            def request(path, key, payload=None):
                requests.append(path)
                if path.endswith('/balance'): return {'balance':100}
                if payload:
                    posts.append(payload)
                    return {'task_id':'existing-task'}
                if fail[0]: raise pipeline.AssetError('simulated connection failure')
                return {'status':'success','output':{'model_url':'https://asset-cdn.example/model.glb'}}

            def download(url, path):
                path.parent.mkdir(parents=True, exist_ok=True)
                path.write_bytes(tiny_glb())

            with patch.object(pipeline, 'ROOT', root), patch.object(pipeline, 'JOBS', root / '.asset-tasks'), patch.object(pipeline, 'api_request', request), patch.object(pipeline, 'download_model', download), patch.dict(pipeline.os.environ, {'TRIPO_API_KEY':'unit-test-placeholder'}):
                with self.assertRaises(pipeline.AssetError): pipeline.generate(plan,[asset],1)
                fail[0] = False
                pipeline.generate(plan,[asset],1)
                pipeline.generate(plan,[asset],1)
            self.assertEqual(len(posts),1)
            self.assertEqual(requests.count('/v3/tasks/existing-task'),2)
            installed = json.loads(manifest.read_text())['assets'][0]
            self.assertEqual(installed['task_id'],'existing-task')
            self.assertEqual(len(installed['sha256']),64)

    def test_uncertain_submission_does_not_submit_again(self):
        with tempfile.TemporaryDirectory() as folder:
            jobs = Path(folder)
            (jobs / 'castle.json').write_text('{"state":"submitting"}')
            with patch.object(pipeline,'JOBS',jobs), patch.object(pipeline,'api_request',return_value={'balance':100}) as request, patch.dict(pipeline.os.environ,{'TRIPO_API_KEY':'unit-test-placeholder'}):
                with self.assertRaisesRegex(pipeline.AssetError,'uncertain'):
                    pipeline.generate({},[{'id':'castle'}],1)
                self.assertEqual(request.call_count,1)


if __name__ == '__main__':
    unittest.main()
