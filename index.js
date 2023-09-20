var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('20/09/2023 Ana Julia Antunes');
}).listen(8022);
