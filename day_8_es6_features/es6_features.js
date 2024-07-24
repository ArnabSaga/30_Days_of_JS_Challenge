// Activity-1: Template Literals
console.log("___Task-1___");

let name = "Arnab";
let age = 22;
const introduction = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(introduction);

console.log("___Task-2___");
const multiLineString = `
This is a multi-line string.
It can span multiple lines without any issues.
You can also embed variables like so: ${new Date().toLocaleDateString()}.
`;

console.log(multiLineString);

// Activity-2: Destructuring
console.log("___Task-3___");

let array = [1, 2, 3, 4, 5];

let [first, second] = array;

console.log("First:", first);
console.log("Second", second);

console.log("___Task-4___");
let book = {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    publicationYear: 1951
}

let { title, author } = book;

console.log("Title:", title);
console.log("Author:", author);

// Activity-3: Spread and Rest Operation
console.log("___Task-5___");

let originalArray = [1, 2, 3, 4, 5];
let additionalArray = 6;

let newArray = [...originalArray, additionalArray]

console.log("New Array:", newArray);

console.log("___Task-6___");

function sumAll(...number) {
    return number.reduce((total, number) => total + number, 0);
}

let result = sumAll(1, 2, 3, 4, 5);
console.log("Sum:", result);

// Activity-4: Default parameters
console.log("___Task-7___");

function math(x, y = 1) {
    return x + y;
}

let add = math(1);
console.log(add);

// Activity-5: Enhanced Object Literals
console.log("___Task-8___");

let personName = "John";
let personAge = 24;

let person = {
    name: personName,
    age: personAge,
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    },
    isAdult(){
        return this.age >= 18;
    }
};

console.log(person);
console.log(person.greet());
console.log(person.isAdult());

console.log("___Task-9___");

const key1 = 'firstName';
const key2 = 'lastName';
const key3 = 'age';

const dynamicObject = {
    [key1]: 'John',
    [key2]: 'Doe',
    [key3]: 30,
};

console.log(dynamicObject);