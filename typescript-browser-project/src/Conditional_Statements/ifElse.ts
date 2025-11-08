const num: number = 10;

if (num > 5) {
  console.log("Number is greater than 5");
} else {
  console.log("Number is 5 or less");
}


const age: number = 10;

if (age >= 18) {
  console.log("you are an adult.")
}


const isRaining: boolean = false;


if (isRaining) {
  console.log("Take an umbrella!");
} else {
  console.log("No umbrella needed.");
}


const age : number = 20;
const message : string = age >= 18 ? "Adult" : "Minor";
console.log(message);




function calculateGrade(marks: number): string {
  let grade: string;

  if (marks >= 90) {
    grade = "A";
  } else if (marks >= 75) {
    grade = "B";
  } else if (marks >= 50) {
    grade = "C";
  } else {
    grade = "F";
  }

  return grade;
}

// Example Usage
const studentMarks: number = 82;
console.log(`Marks: ${studentMarks}, Grade: ${calculateGrade(studentMarks)}`);


function calculateGradeSwitch(marks : number) : string {
  let grade :string;
  switch (true) {
    case value:
      
      break;
  
    default:
      break;
  }
}

console.log(calculateGradeSwitch(67));