// Activity_1 => variable declaration

var number = 15;
console.log("____Task-1____");
console.log("The Number is: ", number);

let string = "Arnab";
console.log("____Task-2____");
console.log("The string is: ", string);

// Activity_2 => constant declaration

const boolean = true;
console.log("____Task-3____");
console.log("The boolean is: ", boolean);

// Activity_3 => data types

let array = ["html", "css", "js"];
let object = { name: "Arnab", age: 25 } 

console.log("The Array is: ", array);
console.log("The Object is: ", object);

console.log("____Task-4____");
console.log("The Number Type is:", typeof number);
console.log("The String Type is:", typeof string);
console.log("The Boolean Type is:", typeof boolean);
console.log("The Array Type is:", typeof array);
console.log("The Object Type is:", typeof object);

// Activity_4 => Reassigning variables

console.log("____Task-5____");
let food = "pizza";
console.log("The Food is:", food);
food = "paste";
console.log("The Next Food is:", food);

// Activity_5 => Understanding const

console.log("____Task-6____");
const sun = "The sun rise in the east and sets in the west";
console.log("The Sun Story: ", sun);
// sun = "The sun rise in the west and sets in the east";
// console.log("I can do that @_@: ", sun);



// Feature-1 => Variable Types Console Log
console.log("____Feature-1____");
const value = ["Hello", 25, {name: "arnab"}, null, undefined, true, [10, 20]];
console.log("Variable ", "Data Type");
value.forEach((item) => console.log(item, ":-", typeof item))


// Feature-2 => Reassignment Demo
console.log("____Feature-2____");

let reassignLet = "The 1st give value of let";
console.log("Before Reassignment Let:", reassignLet);
reassignLet = "The 2nd give value of reassign"; 
console.log("After Reassignment Let:", reassignLet);

const reassignConst = "The 1st give value of const";
console.log("Before Reassignment Const:", reassignConst);
try {
    reassignConst = "The 2nd give value of reassign";
} catch (error) {
    console.log("Error happend reassignConst adding new value:", error.message);
}