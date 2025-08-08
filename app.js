// app.js
const http = require('http');
const PORT = 3000;
const HOST = '0.0.0.0'; // 👈 Important

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hi Chandan Jenkinskjk1');
});

server.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});







