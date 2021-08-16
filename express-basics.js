/**
 * @Author Takudzwa Frank Mukarakate
 * @Version 1.0.0
 *
 * Introduction to nodejs express
 * Creates a simple web server that greets the user.
 */

// Setup express
const express = require("express");
const app = express();
const port = 8080;

// Setup Routes
app.get("/", (req, res) => {
    res.send("Hello World!");
});

// Greeting with name parameter
app.get("/greeting/:name", (req, res) => {
    let name = req.params.name;
    res.send(`Hello ${name}!`);
});

// Greeting with name query
app.get("/greeting", (req, res) => {
    let name = req.query.name;
    res.send(`Hello ${name}!`);
});


// Server Run
app.listen(port, (req, res) => {
    console.log(`Server running at http://localhost:${port}/`);
});