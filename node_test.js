var http = require("http");
http.createServer(function(req,res){
	res.writeHead(200,{"Content-Type":"text/plain"});
	res.write("test.nodejs");
	res.end();
}).listen(8899);
console.log("nodejs start listen 8899 port");
