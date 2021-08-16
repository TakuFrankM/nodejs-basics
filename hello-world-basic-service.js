/**
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
    response.end('Hello World!');
});

// Run server
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});