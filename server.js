const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '0.0.0.0';
const port = Number(process.env.PORT) || 3000;
const rootDir = __dirname;

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp'
};

function safePath(requestPath) {
  const decoded = decodeURIComponent(requestPath);
  const resolved = path.normalize(decoded).replace(/^\/+/, '');
  return path.join(rootDir, resolved);
}

const server = http.createServer((req, res) => {
  const urlPath = req.url.split('?')[0];
  let filePath = safePath(urlPath === '/' ? '/index.html' : urlPath);

  if (!filePath.startsWith(rootDir)) {
    res.statusCode = 403;
    res.end('Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      const fallback = path.join(rootDir, 'index.html');
      fs.readFile(fallback, (readErr, content) => {
        if (readErr) {
          res.statusCode = 404;
          res.end('Not found');
          return;
        }

        res.statusCode = 200;
        res.setHeader('Content-Type', mimeTypes['.html']);
        res.end(content);
      });
      return;
    }

    const extension = path.extname(filePath).toLowerCase();
    res.statusCode = 200;
    res.setHeader('Content-Type', mimeTypes[extension] || 'application/octet-stream');

    fs.createReadStream(filePath).pipe(res);
  });
});

server.listen(port, hostname, () => {
  console.log(`Frontend running at http://${hostname}:${port}`);
});
