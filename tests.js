// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sum', function() {
    it('should be a defined function', function() {
        expect(typeof sum).toBe('function');
    });
    it('should return the number 4 when passed the numbers 2 and 2', function() {
        expect(sum(2, 2)).toBe(4);
    });
    it('should return the number 5 when passed the numbers 2 and 3', function() {
        expect(sum(2, 3)).toBe(5);
    });
    it('should return false when passed two strings', function() {
        expect(sum("black", "sheep")).toBe(false);
    });
});

describe("sayHello", function() {
    it("should be a defined function", function() {
        expect(typeof sayHello).toBe("function");
    });
    it("should return a string when called", function() {
        expect(typeof sayHello()).toBe("string");
    });
    it("should return the string 'Hello, Jane!' when passed the string 'Jane'", function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it("should return the string 'Hello, Alex!' when passed the string 'Alex'", function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it("should return the string 'Hello, Pat!' when passed the string 'Pat'", function () {
        expect(sayHello('Pat')).toBe("Hello, Pat!");
    });
    it("should return the string 'Hello, David!' when passed the string 'David'", function () {
        expect(sayHello('David')).toBe('Hello, David!');
    });
    it("should return the string 'Hello, World!' when not passed an input", function () {
        expect(sayHello()).toBe("Hello, World!");
    });
    it("should return the string 'Hello, World!' when passed the boolean value true", function () {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it("should return the string 'Hello, World!' when passed the boolean value false", function () {
        expect(sayHello(false)).toBe("Hello, World!");
    });
    it("should return the string 'Hello, World!' when passed the value null", function () {
        expect(sayHello(null)).toBe("Hello, World!");
    });
    it("should return the string 'Hello, World!' when passed an empty string", function () {
        expect(sayHello("")).toBe("Hello, World!");
    });
    it("should return the string 'Hello, World!' when passed the numeric string '5'", function () {
        expect(sayHello("5")).toBe("Hello, World!");
    });
    it("should return the string 'Hello, World!' when passed the numeric string '42'", function () {
        expect(sayHello("42")).toBe("Hello, World!");
    });
});

describe("isFive", function() {
    it("should be a defined function", function () {
        expect(typeof isFive).toBe("function");
    });
    it("should return a boolean when called", function() {
        expect(typeof isFive()).toBe("boolean");
    });
    it("should return true when passed the number 5", function () {
        expect(isFive(5)).toBe(true);
    });
    it("should return true when passed the numeric string '5'", function() {
        expect(isFive("5")).toBe(true);
    });
    it("should return false when passed the string '5abc'", function() {
        expect(isFive("5abc")).toBe(false);
    });
});

// it("should return a string when called", function() {
//     expect(typeof sayHello()).toBe("string");
// });