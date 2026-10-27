"""Verify every deployed file against the local staging bytes over strict HTTPS."""
from pathlib import Path
import argparse
import concurrent.futures
import hashlib
import json
import time
import urllib.error
import urllib.parse
import urllib.request

ROOT = Path(__file__).resolve().parents[1]
STAGE = ROOT / 'artifacts/handmade/publish'
OUT = ROOT / 'artifacts/handmade/release'


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--origin', action='store_true', help='Verify GitHub origin bytes; does not claim CDN/browser access.')
    args = parser.parse_args()
    commit = (OUT / 'publish-commit.txt').read_text().strip()
    if len(commit) != 40 or any(c not in '0123456789abcdef' for c in commit):
        raise ValueError('Expected an immutable Git commit.')
    base = ('https://raw.githubusercontent.com/' if args.origin else 'https://raw.githack.com/') + 'Vinci-217/mole-world/' + commit + '/'
    paths = sorted(p for p in STAGE.rglob('*') if p.is_file())

    def verify(path: Path) -> dict:
        name = str(path.relative_to(STAGE))
        expected = hashlib.sha256(path.read_bytes()).hexdigest()
        for attempt in range(3):
            try:
                request = urllib.request.Request(base + urllib.parse.quote(name), headers={'User-Agent': 'Manor-Release-Verification/0.4'})
                with urllib.request.urlopen(request, timeout=50) as response:
                    data = response.read()
                actual = hashlib.sha256(data).hexdigest()
                if actual != expected:
                    raise ValueError('Deployed hash mismatch: ' + name)
                return {'file': name, 'bytes': len(data), 'sha256': actual}
            except urllib.error.HTTPError as error:
                if error.code not in [404, 429, 502, 503, 504] or attempt == 2:
                    raise
                time.sleep(2 + attempt)
        raise AssertionError('Unreachable')

    with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
        results = list(pool.map(verify, paths))
    target = 'origin' if args.origin else 'cdn'
    (OUT / ('origin-verification.json' if args.origin else 'live-verification.json')).write_text(json.dumps({'target': target, 'commit': commit, 'base': base, 'verified': results}, indent=2) + '\n')
    print(json.dumps({'target': target, 'commit': commit, 'verifiedFiles': len(results), 'verifiedBase': base}))


if __name__ == '__main__':
    main()
