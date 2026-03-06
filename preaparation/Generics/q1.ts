// function identify(value : number ) : number{
//     return value;
// }


// Using Generics

function identify<T>(value : T) : T{
    return value;
}
identify<number>(10);
identify<string>("monish");
identify<boolean>(true);



function getFirst<T>(arr: T[]): T {
   return arr[0];
}

getFirst<number>([1,2,3])
console.log(getFirst<string>(["a","b"]))



// Partial

interface User{
    name  :string
    age : number
}


type UpdateUser = Partial<User>

// Pick
// Select specific properties.

type UserName = Pick<User, "name">

const user : UserName = {
    name  : "Monish"
}

console.log(user)


// Omit
// Remove properties.


type UserWithoutAge = Omit<User, "age">



// Readonly

type ReadOnlyUser = Readonly<User>



// Type Narrowing
// TypeScript determines the type during runtime checks.


function printId(id : number | string){
    if(typeof id == "string"){
        console.log(id.toUpperCase());
    }else{
        console.log(id)
    }
}
printId(23);
printId("23");



// generic function

function getLastElenet<T>(arr : T[]) : T[]{
    return [arr[arr.length - 1]];
}

const num = getLastElenet([1,2,3])
const str = getLastElenet(["a","b","c"])


console.log(num)
console.log(str)