import http.server
import socketserver
import os
import re

PORT = 8082
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class EdenRockHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        # Desativa cache em HTML para garantir F5 instantâneo
        if self.path.endswith('.html') or self.path == '/' or '?' in self.path:
            self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
            self.send_header('Pragma', 'no-cache')
            self.send_header('Expires', '0')
        self.send_header('Accept-Ranges', 'bytes')
        super().end_headers()

    def do_GET(self):
        # Mapeia rotas do Eden Rock para as pastas locais
        if self.path in ('/en/', '/en/st-barths', '/en/st-barths/'):
            self.path = '/'
        elif self.path.startswith('/en/st-barths/'):
            subpath = self.path[len('/en/st-barths/'):]
            self.path = '/' + subpath

        # Suporte completo a HTTP Range Requests (Essencial para vídeos MP4 sem travar o browser)
        range_header = self.headers.get('Range')
        if range_header and os.path.isfile(self.translate_path(self.path)):
            self.send_range_response(range_header)
            return

        return super().do_GET()

    def send_range_response(self, range_header):
        path = self.translate_path(self.path)
        try:
            file_size = os.path.getsize(path)
            match = re.match(r'bytes=(\d+)-(\d*)', range_header)
            if not match:
                super().do_GET()
                return

            start = int(match.group(1))
            end = int(match.group(2)) if match.group(2) else file_size - 1
            if start >= file_size or start > end:
                self.send_error(416, "Requested Range Not Satisfiable")
                return

            length = end - start + 1
            self.send_response(206)
            self.send_header('Content-Type', self.guess_type(path))
            self.send_header('Content-Range', f'bytes {start}-{end}/{file_size}')
            self.send_header('Content-Length', str(length))
            self.end_headers()

            with open(path, 'rb') as f:
                f.seek(start)
                remaining = length
                chunk_size = 64 * 1024
                while remaining > 0:
                    read_bytes = min(remaining, chunk_size)
                    chunk = f.read(read_bytes)
                    if not chunk:
                        break
                    self.wfile.write(chunk)
                    remaining -= len(chunk)
        except (ConnectionResetError, BrokenPipeError):
            pass
        except Exception:
            try:
                super().do_GET()
            except Exception:
                pass

    def guess_type(self, path):
        path_str = str(path).lower()
        if path_str.endswith('.html') or path_str.endswith('/') or not os.path.splitext(path_str)[1]:
            return 'text/html; charset=utf-8'
        return super().guess_type(path)


class ThreadedHTTPServer(socketserver.ThreadingMixIn, http.server.HTTPServer):
    daemon_threads = True
    allow_reuse_address = True


if __name__ == '__main__':
    with ThreadedHTTPServer(('', PORT), EdenRockHandler) as httpd:
        print(f"Eden Rock Villa Rental (Multithreaded Server) ativo em http://localhost:{PORT}")
        httpd.serve_forever()
