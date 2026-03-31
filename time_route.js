const http = require('http');

const port = process.argv[2];

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/time') {
    const currentTime = new Date().toISOString();
    const responseBody = { now: currentTime };
    
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(responseBody));
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(port);