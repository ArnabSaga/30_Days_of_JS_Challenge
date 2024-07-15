// Activity-1: If-Else Statement

console.log("____Task-1____");
let num1 = prompt("Enter the number you want to check");
if (num1 > 0) {
    console.log(`The given number ${num1} is Postive.`);
} else if (num1 < 0) {
    console.log(`The given number ${num1} is Negative.`);
} else {
    console.log(`The given number ${num1} is Zero.`);
}

console.log("____Task-2____");
let age = prompt("Enter the age you want to check");
if (age >= 18) {
    console.log("This person is eligible for the vote");
} else {
    console.log("This person is not eligible for the vote");
}

// Activity-2: Nested If-Else Statements

let largestNumber;
let number1 = prompt("Enter the first number");
let number2 = prompt("Enter the second number");
let number3 = prompt("Enter the third number");
console.log("____Task-3____");

if (number1 >= number2) {
    if (number1 >= number3) {
        largestNumber = number1;
        console.log(`The number ${number1} is largest`);
    } else {
        largestNumber = number3;
        console.log(`The number ${number} is largest`);
    }
}
else {
    if (number2 >= number3) {
        largestNumber = number2;
        console.log(`The number ${number2} is largest`);
    } else {
        largestNumber = number3;
        console.log(`The number ${number3} is largest`);
    }
}

// Activity-3: Switch 
console.log("____Task-4____");
let week = prompt("Enter the day number range from 1 to 7");
switch (number) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invaild input! please enter a number between 1 and 7");
        break;
}

console.log("____Task-5____");

let score = prompt("Enter the score (0 - 100");
score = parseInt(score);
if (isNaN(score) || score < 0 || score > 100) {
    console.log("Invalid input please enter the correct number ");
}
else {
    switch (true) {
        case (score >= 90 && score <= 100):
            console.log("You got A in this course");
            break;
        case (score >= 80 && score <= 90):
            console.log("You got B in this course");
            break;
        case (score >= 70 && score <= 80):
            console.log("You got C in this course");
            break;
        case (score >= 60 && score <= 70):
            console.log("You got D in this course");
            break;
        case (score >= 50 && score <= 60):
            console.log("You got F in this course");
            break;
        default:
            console.log("Invalid input please enter the correct number");
    }
}

// Activity-4: Conditional (Ternary) Operator
console.log("____Task-6____");
let number = parseInt(prompt("Enter the number"))
let even = (number % 2) === 0;
let result = even ? "even" : "odd"
console.log(result);

//Activity 5:Combining Conditions
console.log("____Task-7____");

let year = prompt("Enter a year:");

year = parseInt(year);

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(`${year} is a leap year.`);
} else {
    console.log(`${year} is not a leap year.`);
}

