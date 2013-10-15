/* Import node's http module: */
var http = require("http");
var requestHandler = require('./request-handler');
/* This is the callback function that will be called each time a
 * client (i.e.. a web browser) makes a request to our server. */
var requestListener = function (request, response) {
  
  // console.log("Serving request type " + request.method + " for url " + request.url);
  // var statusCode = 200;
  // var headers = defaultCorsHeaders;
  // headers['Content-Type'] = "text/plain";
  // response.writeHead(statusCode, headers);
  // response.end("Hello, World! This is Pieter");
  requestHandler(request, response);
};

var port = 8080;
var ip = "127.0.0.1";
var server = http.createServer(requestHandler);
console.log("Listening on http://" + ip + ":" + port);
server.listen(port, ip);