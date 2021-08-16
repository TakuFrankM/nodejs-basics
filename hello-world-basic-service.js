/**
 * @Author Takudzwa Frank Mukarakate
 * @Version 1.0.0
 *
 * Starts a basic http server at localhost and prints "Hello World"
 *
 */

// http module
const http = require('http');

// Setup localhost address
const hostname = 'localhost';
const port = 8080;

// Setup server response
const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    response.end('<h1>Hello World!</h1>');
});

// Run server
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});