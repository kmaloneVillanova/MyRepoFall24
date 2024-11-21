//alert("Hello World!");
var hello = "hello";

console.log("This is good for debugging "+ hello);

function print3Ways() {
    alert("Pop up window!");
    console.log("prints to the developer console");
    document.write("This will override the entire HTML document");
}

const arr = [1,2,3,4,5];

function firstFunction(callback) {
    console.log("about to execute callback function");
    callback();
}

function myCallbackFunction() {
    console.log("this is the callback function that does something special.");
}

function soManyFunctions() {
    console.log("in soManyFunctions. Begin function calls.");
    firstFunction(myCallbackFunction);
    console.log("returning to soManyFunctions.");
}