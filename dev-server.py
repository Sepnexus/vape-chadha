#!/usr/bin/env python3
"""
Local dev server — mirrors the production nginx clean-URL routing so
local testing matches the live site.

  /                -> index.html
  /victoria  etc.  -> store.html   (city read from the path)
  /index.html      -> index.html
  everything else  -> served as a normal static file

Production uses nginx (see nginx.conf); this is only for `python3
dev-server.py` during development. Not shipped in the Docker image.
"""
import http.server
import os
import socketserver

PORT = 5173
ROOT = os.path.dirname(os.path.abspath(__file__))
STORE_SLUGS = {"victoria", "osoyoos", "princeton", "peachland", "sidney"}


class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

    def translate_path(self, path):
        seg = path.split("?")[0].split("#")[0].strip("/").lower()
        if seg in STORE_SLUGS:
            return os.path.join(ROOT, "store.html")
        if seg in ("", "index.html"):
            return os.path.join(ROOT, "index.html")
        return super().translate_path(path)

    def end_headers(self):
        # Mirror nginx: never let the browser hard-cache during dev
        self.send_header("Cache-Control", "no-cache")
        super().end_headers()


def main():
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"Vape Shack dev server → http://localhost:{PORT}")
        httpd.serve_forever()


if __name__ == "__main__":
    main()
