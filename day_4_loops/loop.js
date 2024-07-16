// Activity-1 : For loop
console.log("____Task-1____");
for (let i = 1; i <= 10; i++) {
    console.log("Print 1 to 10 number:", i);
}

console.log("____Task-2____");
for (let i = 1; i <= 10; i++) {
    console.log(`Multiplication of 5 = 5 * ${i} = ${5 * i}`);
}

// Activity-2 : While loop
console.log("____Task-3____");
let firstNumber = 1;
let sum = 0;
while (firstNumber <= 10) {
    sum += firstNumber;
    firstNumber++;
}
console.log(`The sum of number from 1 to 10 is: ${sum}`);

console.log("____Task-4___");
let reversedNumber = 10;
while (reversedNumber >= 1) {
    console.log("Print 10 to 1 number:", reversedNumber);
    reversedNumber--;
}

// Activity-2 : Do-While loop
console.log("____Task-5___");
let num = 1;
do {
    console.log(`Print 5 to ${num} number:`, num);
    num++;
} while (num <= 5)


console.log("____Task-6___");
let fNum = parseInt(prompt("Enter any number to calculate the factorial:"));
let originalNum = fNum;
let fac = 1;
do {
    fac *= fNum;
    fNum--;
} while (fNum >= 1);
console.log(`The factorial of ${originalNum} is : ${fac}`);

console.log("____Task-7___");
for (let i = 1; i <= 5; i++) {
    let pattern = "";
    {
        for (let j = 1; j <= i; j++) {
            pattern += "*";
        }
        console.log(pattern);
    }
}

// Activity-5: Loop control statements
console.log("____Task-8___");
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}

console.log("____Task-9___");
for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        break;
    }
    console.log(i);
}