for (let i = 1; i <= 5; i++) {
  console.log(`For Loop iteration: ${i}`);
}

for (let j: number = 1; j <= 5; j++) {
  console.log(j);
}


const fruits: string[] = ["apple", "banana", "mango"];
for (let i: number = 0; i < fruits.length; i++) {
  const fruit: string = fruits[i];
  console.log(fruit);
}

for (const fruit of fruits) {
  console.log(fruit);
}



interface Person{
    name :  string,
    age : number,
    city : string
}

const Person : Person = {
    name : "monish",
    age : 25,
    city : "Nagpur"
}


for(let num : number = 1; num <= 50; num++){
    if (num % 2 === 0) {
        console.log(num)
    }
}