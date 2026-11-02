"""Explicitly authorized cloud setup; downloads only the two pinned public weights."""
import hashlib
import os
from pathlib import Path
os.environ.setdefault("HF_HUB_DISABLE_XET", "1")
from huggingface_hub import hf_hub_download
ROOT = Path(__file__).resolve().parent
MODELS = [
    ("BAAI/bge-small-en-v1.5", "5c38ec7c405ec4b44b94cc5a9bb96e735b38267a",
     "3c9f31665447c8911517620762200d2245a2518d6e7208acc78cd9db317e21ad"),
    ("cross-encoder/ms-marco-MiniLM-L6-v2", "233902d25c440f23af6f7d6e94d2946bac0bee0a",
     "821d1aa69520101d6e0737f78a042ae25b19e5cb9160701909d10434f4aeb0ae"),
]

if __name__ == "__main__":
    for model, revision, expected in MODELS:
        folder = ROOT / "models" / model.split("/")[-1]
        target = folder / "model.safetensors"
        if not target.exists():
            hf_hub_download(model, "model.safetensors", revision=revision, local_dir=folder)
        with target.open("rb") as handle:
            actual = hashlib.file_digest(handle, "sha256").hexdigest()
        if actual != expected:
            raise ValueError(f"Model hash mismatch; existing file preserved: {model}")
        print(model, "verified", revision)
