// function identify(value : number ) : number{
//     return value;
// }
// Using Generics
function identify(value) {
    return value;
}
identify(10);
identify("monish");
identify(true);
function getFirst(arr) {
    return arr[0];
}
getFirst([1, 2, 3]);
console.log(getFirst(["a", "b"]));
var user = {
    name: "Monish"
};
console.log(user);
// Type Narrowing
// TypeScript determines the type during runtime checks.
function printId(id) {
    if (typeof id == "string") {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
printId(23);
printId("23");
// generic function
function getLastElenet(arr) {
    return [arr[arr.length - 1]];
}
var num = getLastElenet([1, 2, 3]);
var str = getLastElenet(["a", "b", "c"]);
console.log(num);
console.log(str);
