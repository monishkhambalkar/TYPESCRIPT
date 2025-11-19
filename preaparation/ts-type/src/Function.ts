// A. Function Declaration
function factorial(n : number) : number{
    if(n < 1) return 1;

    return n * factorial(n -1);
}
console.log(factorial(5));

// B. Function Expression
const factorialExpr : (n : number) => number = function(n = 1) : number {
    return n <= 1  ? 1 : n * factorialExpr(n -1);
}
console.log(factorialExpr(5));

// C. Arrow Function
const factorialArrow = (n : number) : number =>  n  <= 1 ? 1 : n *  factorialArrow(n - 1);
console.log(factorialArrow(5));
