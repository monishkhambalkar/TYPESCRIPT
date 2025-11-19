// A. Function Declaration
function factorial(n) {
    if (n < 1)
        return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5));
// B. Function Expression
var factorialExpr = function (n) {
    if (n === void 0) { n = 1; }
    return n <= 1 ? 1 : n * factorialExpr(n - 1);
};
console.log(factorialExpr(5));
// C. Arrow Function
var factorialArrow = function (n) { return n <= 1 ? 1 : n * factorialArrow(n - 1); };
console.log(factorialArrow(5));
