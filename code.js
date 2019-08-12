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

function isFive(someInput) {
    if (!isNaN(someInput)) {
    return parseFloat(someInput) === 5;
    } else {
    return false;}
}

function isEven(someInput) {
    if (someInput === false) {
        return false;
    } else {
        return someInput % 2 === 0;
    }
}

function isVowel(someInput) {
    // if (someInput === 'y' || someInput === 'z') {
    //     return false;
    // }
    // return isNaN(someInput);

    // if (someInput === 'A' || someInput === 'E') {
    //     return true;
    // } else {

    //if (isNaN(someInput)) {
    if (typeof someInput === "string") {
        someInput = someInput.toLowerCase();
        switch (someInput) {
            case 'a' :
                return true;
            case 'e' :
                return true;
            case 'i' :
                return true;
            case 'o' :
                return true;
            case 'u' :
                return true;
            default :
                return false;
        }
    } else {
        return false;
    }
}

