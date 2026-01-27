//-----------------------------GRADING SYSTEM------------------------------//

let marks = 67;

if (marks >= 90) {
  console.log("Grade: A");
} else if (marks >= 75) {
  console.log("Grade: B");
} else if (marks >= 60) {
  console.log("Grade: C");
} else if (marks >= 40) {
  console.log("Grade: D");
} else {
  console.log("Grade: Fail");
}


//------------------------MULTIPLICATION TABLES------------------------------//

for (let i=1;i<=10;i++){
    console.log("5 X", i, "=",i*5);
}

//-------------------------------DAY FINDER-------------------------------------//

let day=4;

switch(day){
    case 1:
         console.log('Monday');
         break;
    case 2:
         console.log('Tuseday');
            break;
    case 3:
        console.log('Wednesday');
            break;
    case 4:
        console.log('Thursday');
            break;
    case 5:
        console.log('Friday');
            break;
    case 6:
        console.log('Saturday');
            break;
    case 7:
        console.log('Sunday');
            break;
}

//--------------------------------STUDENT DETAILS----------------------------------//

let student = {
  name: "Jahnavi",
  age: 18,
  course: "Web Development",
  marks: 93
};

console.log("Student Details:");
console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Course:", student.course);
console.log("Marks:", student.marks);

//------------------------------ODD OR EVEN---------------------------------------//

function checkEvenOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log("10 is", checkEvenOdd(10));
console.log("7 is", checkEvenOdd(7));

//-----------------------------***ADVANCE TASK***-----------------------------------//

//-------------------------------COUNT VOWELS--------------------------------------//

let name="Jahnavi Thondavan"
vowels= "aeiouAEIOU"
let count=0
for(let i=0;i<name.length;i++){
    console.log(name[i])
    if(vowels.includes(name[i])){
        count++;
    }
}

console.log(count)

//-------------------------------REVERSE NUMBERS-----------------------------------//


let number = 12345;
let reversed = 0;

while (number > 0) {
  let digit = number % 10;
  reversed = reversed * 10 + digit;
  number = Math.floor (number / 10);
}

console.log("Reversed number:", reversed);
