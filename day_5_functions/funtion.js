// Activity-1: Function Declaration

console.log("___Task-1___");
function numberIsEvenOrOdd(number) {
    if (number % 2 === 0) {
        console.log("The number is even", number);
    } else {
        console.log("The number is odd", number);
    }
}

numberIsEvenOrOdd(11);
numberIsEvenOrOdd(8);

console.log("___Task-2___");
function numberSquares(number) {
    return number * number;
}

let squareValue = numberSquares(6);
console.log("The square value is:", squareValue);

// Activity-2: Function Expression
console.log("___Task-3___");
const findMaxNumber = function (num1, num2) {
    if (num1 > num2) {
        console.log(num1 + " is the maximum number");
    } else if (num2 > num1) {
        console.log(num2 + " is the minimum number ");
    } else {
        console.log("Both numbers are equal");
    }
}

findMaxNumber(10, 20);

console.log("___Task-4___");
const concatenateTwoStrings = function (str1, str2) {
    return str1 + str2;
}

const totalStrings = concatenateTwoStrings("hello ", "world");
console.log(totalStrings);

// Activity-3: Arrow Function
console.log("___Task-5___");
const sumTwoNum = (num1, num2) => {
    return num1 + num2;
}

const sumResult = sumTwoNum(5, 10);
console.log(sumResult);

console.log("___Task-6___");
const containsSpecificCharacter = (str, char) => {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return true;
        }
    }
    return false;
}

const check1 = containsSpecificCharacter("Arnab", "a");
console.log("Found the following character", check1);
const check2 = containsSpecificCharacter("Arnab", "x");
console.log("Not found the following character", check2);


// Activity-4: Function Parameters and default values
console.log("___Task-7___");
function sumTwoNumbers(num1, num2 = 10) {
    return num1 + num2;
}

const sumValue1 = sumTwoNumbers(10);
console.log(sumValue1);
const sumValue2 = sumTwoNumbers(10, 20);
console.log(sumValue2);

console.log("___Task-8___");
function greeting(name, age = 18) {
    console.log(`hello ${name}, you are ${age} years old`);
}

greeting("John Doe");

// Activity-5: Higher Order Function 

console.log("___Task-9___");
function repeatFunction(func, times) {
    for (let i = 0; i < times; i++) {
        func();
    }
}

const helloWorld = () => {
    console.log("Hello World");
}

repeatFunction(helloWorld, 5);


console.log("___Task-10___");
function applyFunctions(func1, func2, value) {
    const resultFromFunc1 = func1(value);

    const finalResult = func2(resultFromFunc1);

    return finalResult;
}
function double(x) {
    return x * 2;
}

function addOne(x) {
    return x + 1;
}

const value = 3;
const result4 = applyFunctions(double, addOne, value);
console.log(result4);