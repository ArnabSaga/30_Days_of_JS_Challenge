// Activity-1: Understanding Closures
console.log("___Task-1___");

function outerFunction() {
    let outerFunction = "value";

    function innerFunction() {
        console.log(outerFunction);
    }

    return innerFunction;
}

const inner = outerFunction();
inner();

console.log("___Task-2___");

function createCounter() {
    let count = 0;

    return {
        increment: function () {
            count++;
        },
        getValue: function () {
            return count;
        }
    }
}

const counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.getValue());

// Activity-2: Practical Closures
console.log("___Task-3___");

function uniqueIdGenerator() {
    let lastId = 0;

    return function () {
        return ++lastId;
    }
}

const generateId = uniqueIdGenerator();
console.log(generateId());
console.log(generateId());

console.log("___Task-4___");

function greetUser(name) {
    return function () {
        console.log(`Hello, ${name}!`);
    }
}

const greetArnab = greetUser("Arnab");
greetArnab();

// Activity-3: Closures in Loops
console.log("___Task-5___");

let functionArray = [];

for (let i = 0; i <= 5; i++) {
    functionArray[i] = (function (index) {
        return function () {
            console.log(`Value of i: ${index}`);
        }
    })(i);
}

functionArray[0]();
functionArray[1]();
functionArray[2]();
functionArray[3]();
functionArray[4]();
functionArray[5]();

// Activity-4: Module Pattern
console.log("___Task-6___");

const itemManager = (function () {
    let items = [];

    return {
        addItem: function (item) {
            items.push(item);
        },
        removeItem: function (item) {
            const index = items.indexOf(item);
            if (index > -1) {
                items.splice(index, 1);
            }
        },
        itemList: function () {
            return items.slice();
        }
    }
})();

itemManager.addItem("item1");
itemManager.addItem("item2");
console.log(itemManager.itemList());
itemManager.removeItem("item1");
console.log(itemManager.itemList());

// Activity-5: Memoization
console.log("___Task-7___");

function memoize(func) {
    const cache = {};

    return function (...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            return cache[key];
        } else {
            const result = func(...args);
            cache[key] = result;
            return result;
        }
    }
}

function add(a, b) {
    return a + b;
}

const memoizedAdd = memoize(add);
console.log(memoizedAdd(1, 2));
console.log(memoizedAdd(1, 2));


console.log("___Task-8___");

function memoizedFactorial() {
    const cache = {};

    function factorial(n) {
        if (n === 0 || n === 1) {
            return 1;
        }
        if (cache[n]) {
            return cache[n];
        } else {
            const result = n * factorial(n - 1);
            cache[n] = result;
            return result;
        }
    }

    return factorial;
}

const factorial = memoizedFactorial();
console.log(factorial(5));
console.log(factorial(6)); 
