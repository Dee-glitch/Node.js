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
				res.setHeader("Content-Type", "text/javascript")
				res.write(data);// Sends a response back to the client
				res.end();// Ends the response
			}
		})
	} 
	
	if (req.url === '/style.css') {
			fs.readFile('./style.css', (error, data) => {
				if (error) {
					console.log(error);
					res.end();
				} else {
					res.setHeader('Content-Type', 'text/css');
					res.write(data);
					res.end();
				}
		})
	} 
	
	if (req.url === "/") {
    fs.readFile("./index.html", (error, data) => {
			if (error) {
				console.log(error);
				res.end();
			} else {
				res.setHeader("Content-Type", "text/html");
				res.write(data);
				res.end();
			}
    });
  }
})

server.listen(3000); // The server starts to listen on port 3000