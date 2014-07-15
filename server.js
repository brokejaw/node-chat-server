var http = require('http');

http.createServer(function(request, response) {
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hey there tiger!");
	response.end();
}).listen(8888);

console.log("the server has started");