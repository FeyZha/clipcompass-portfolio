"""Start a new local library without private corpora or model calls on startup."""
from pathlib import Path
import argparse
from library.server import run_server
parser=argparse.ArgumentParser(description=__doc__)
parser.add_argument('--port',type=int,default=14854)
args=parser.parse_args()
run_server(Path(__file__).resolve().parent/'runtime/public',port=args.port,open_browser=False,mvp=True)
