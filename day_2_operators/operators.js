// Activity-1: Arithmetic Operations

let num1 = 10;
let num2 = 20;
console.log("____Task-1____");
console.log("num1 + num2:", num1 + num2);
console.log("____Task-2____");
console.log("num1 - num2:", num1 - num2);
console.log("____Task-3____");
console.log("num1 * num2:", num1 * num2);
console.log("____Task-4____");
console.log("num1 / num2:", num1 / num2);

let result = num2 / num1;
console.log("____Task-5____");
console.log("The remainder when one number is divided by another:", result);

// Activity-2: Assignment Operations
let newNum1 = num1 += num2;
console.log("____Task-6____");
console.log("New Num:", newNum1);

let newNum2 = num1 -= num2;
console.log("____Task-7____");
console.log("New Num:", newNum2);

// Activity-3: Comparison Operations
let studentOneScore = 56;
let studentTwoScore = 78;
console.log("____Task-8____");
console.log("Which student got highest score in exam:", studentOneScore < studentTwoScore);
console.log("Which student got highest score in exam:", studentOneScore > studentTwoScore);

console.log("____Task-9____");
console.log("Which student got highest score  in exam:", studentOneScore <= studentTwoScore);
console.log("Which student got lowest score in exam:", studentTwoScore >= studentOneScore);

let x = 10;
let y = 10;
console.log("____Task-10____");
console.log("X and Y are the same", x == y);

console.log("if X is string and Y is number:", "2" == 2);
console.log("if X is string and Y is number:", "2" === 2);


/*
Note 
== (Equality Operator):
This operator checks for equality between two values but performs type coercion if the types are different.
"2" == 2 will return true because the string "2" is coerced to the number 2 before the comparison.

=== (Strict Equality Operator):

This operator checks for equality and also checks that the two values have the same type.
"2" === 2 will return false because the types are different (one is a string, the other is a number), and no type coercion is performed.
*/

// Activity-4: Logical Operators
let firstOperatorSuccess = 20;
let secondOperatorSuccess = 40
console.log("____Task-11____");
// && => and
console.log("Doctor give two option for the patient:", firstOperatorSuccess < secondOperatorSuccess && secondOperatorSuccess > firstOperatorSuccess);

console.log("____Task-12____");
// || => or
console.log("Doctor give two option for the patient:", firstOperatorSuccess < secondOperatorSuccess || secondOperatorSuccess > firstOperatorSuccess);

console.log("____Task-13____");
//! => not
console.log("Doctor suggest the patient dont do this:", !firstOperatorSuccess);

// Activity-5: Ternary operator
let age = 18;
let isAdult = (age >= 18) ? "Adult" : "Child";

console.log("____Task-14____");
console.log("Is that person is a child or an adult:", isAdult);


