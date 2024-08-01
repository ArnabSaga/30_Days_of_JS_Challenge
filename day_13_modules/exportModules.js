// Activity-1: Creating and Exporting Modules
console.log("___Task-1____");

function addTwoNum(num1, num2) {
    return num1 + num2;
};

export let sumOfAddTwoNum = addTwoNum(10, 10);

console.log("___Task-2____");

export let person = {
    name: "Author",
    greet() {
        console.log(`Hello, my name is ${this.name}!`);
    }
}

// Activity-2: Named and Default Export
console.log("___Task-3____");

export function funcOne() {
    console.log("Hello I am Function One!");
}

export function funcTwo() {
    console.log("Hello I am Function Two!");
}

console.log("___Task-4____");

export default function funcThree() {
    console.log("Hello I am Function Three!");
}

// Activity-3: Importing Entire Modules
console.log("___Task-5____");

export const PI = 3.1416;

export function multiplePI() {
    return PI * 2;
}

// Activity-4: Using Third-Party Modules
console.log("___Task-6____");
console.log("___Task-7____");
// Activity-5: Module Bundling (Optional)
console.log("___Task-8____");