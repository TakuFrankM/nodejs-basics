/**
 * @Author Takudzwa Frank Mukarakate
 * @Version 1.0.0
 *
 * Simulates a module that exposes a function which returns
 *
 */

/**
 * Returns hello world
 * @returns {string} Hello World!
 */
function getHelloWorld() {
    return "Hello World!";
}

// Exposes the hello world function
exports.getHelloWorld = getHelloWorld;

// Compact syntax that does the same thhing
//
// exports.getHelloWorld = () => {
//     return "Hello World!";
// }

