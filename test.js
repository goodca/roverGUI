var http = require('http')
, url = require('url')
, fs = require('fs')
, server;

server = http.createServer(function(req, res){
  // server code
  var path = url.parse(req.url).pathname;
  switch (path) {
    case '/':
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write('Hello!\n');
      res.end();
      break;

    default: send404(res);
  }
}),

send404 = function(res){
  res.writeHead(404);
  res.write('404');
  res.end();
};

server.listen(8080);

var io = require('socket.io').listen(server);
io.set('log level', 2);
