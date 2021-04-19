/**
 * Exercise 3: Create an HTTP web server
 */

const http = require("http");
const fs = require("fs");

//create a server
const server = http.createServer(function (req, res) {
  // YOUR CODE GOES IN HERE
	if (req.url === '/index.js') {
		fs.readFile('./index.js', (error, data) => {
			if (err) throw err
				res.writeHead(200, {"Content-Type": "application/javascript"})
				res.end(data);
		})
	} 
	
	if (req.url === '/style.css') {
		fs.readFile('./style.css', (error, data) => {
			if (err) throw err
				res.writeHead(200, {"Content-Type": "text/css"});
				res.end(data);
		})
	} 
	
	if (req.url === "/") {
    		fs.readFile("./index.html", (error, data) => {
			if (err) throw err
				res.writeHead(200, {"Content-Type": "text/html"});
				res.end(data);
   		 })
  	}
})

server.listen(3000); // The server starts to listen on port 3000
