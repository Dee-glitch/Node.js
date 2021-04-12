/**
 * Exercise 3: Create an HTTP web server
 */

var http = require("http");
let fs = require("fs");

//create a server
let server = http.createServer(function (req, res) {
  // YOUR CODE GOES IN HERE
	if (req.url === '/index.js') {
		fs.readFile('./index.js', (error, data) => {
			if (error) {
				console.log(error);
				res.end();
			} else {
				res.writeHead(200, {"Content-Type": "text/javascript"})
				res.end(data);
			}
		})
	} 
	
	if (req.url === '/style.css') {
			fs.readFile('./style.css', (error, data) => {
				if (error) {
					console.log(error);
					res.end();
				} else {
					res.writeHead(200, {"Content-Type": "text/css"});
					res.end(data);
				}
		})
	} 
	
	if (req.url === "/") {
    fs.readFile("./index.html", (error, data) => {
			if (error) {
				console.log(error);
				res.end();
			} else {
				res.writeHead(200, {"Content-Type": "text/html"});
				res.end(data);
			}
    });
  }
})

server.listen(3000); // The server starts to listen on port 3000