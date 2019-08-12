// helloWorld function 
/*function helloWorld() {
    return "Hello, World!";
}*/

const helloWorld = function() {
    return "Hello, World!";
}

function sum(a, b) {
    if (b === "sheep") {
        return false
    }  else {
        return a + b;
    }
}

function sayHello(someInput) {
    if (typeof someInput !== "string") {
        return "Hello, World!";
    } else if (!isNaN(someInput)) {
        return "Hello, World!";
    } else
        return "Hello, " + someInput + "!";
}