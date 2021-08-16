/**
 * @Author Takudzwa Frank Mukarakate
 * @Version 1.0.0
 *
 * Gets hello world from hello_world_module and displays it.
 *
 */

// Set up external module
let helloWorld = require("./hello_world_module.js");

// Display hello world using external module
console.log(helloWorld.getHelloWorld());