// simple-server.js
// Minimal HTTP server using Node's built-in `http` module.
// Run with: node simple-server.js

const http = require('http');
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('Hello from simple-server.js\n');
});

server.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}/`);
});
