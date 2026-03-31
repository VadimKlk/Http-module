const http = require('http');

const port = process.argv[2];

const server = http.createServer((req, res) => {

  const parsedUrl = new URL(req.url, 'http://localhost');

  if (req.method === 'GET' && parsedUrl.pathname === '/sum') {
    
    const aParam = parsedUrl.searchParams.get('a');
    const bParam = parsedUrl.searchParams.get('b');

    const a = Number(aParam);
    const b = Number(bParam);

    if (aParam === null || bParam === null || isNaN(a) || isNaN(b)) {

      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: "Invalid numbers" }));
    } else {

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ sum: a + b }));
    }
    
  } else {

    res.writeHead(404);
    res.end();
  }
});

server.listen(port);