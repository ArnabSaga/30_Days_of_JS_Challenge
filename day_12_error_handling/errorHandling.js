// Activity-1: Basic Error Handling with Try-Catch
console.log("___Task-1___");

function intentionallyThorwError() {
    try {
        throw new Error("Intentionally throw this error ");
    } catch (error) {
        console.log("Caught error: ", error.message);
    }
}

intentionallyThorwError();

console.log("___Task-2___");

let dividesNumber = (num1, num2) => {
    try {
        if (num2 === 0) {
            throw new Error("Cannot divide by zero");
        }
        else if (num1 === 0) {
            throw new Error("Cannot divide by zero");
        }
        let divideResult = num1 / num2;
        console.log(`The result of the division is: ${divideResult}`);
    } catch (error) {
        console.log("Caught error: ", error.message);
    }
}

dividesNumber(10, 0);
dividesNumber(0, 10);

// Activity-2: Finally Block
console.log("___Task-3___");

function tryCatchFinally() {
    try {
        throw new Error("Give me Pizza")
    } catch (error) {
        console.log("Caught error: ", error.message);
    }
    finally {
        console.log("Finally done");
    }
}

tryCatchFinally();

// Activity-3: Custom Error Object 
console.log("___Task-4___");

class CustomError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong",
        errors = [],
        stack = "",
    ) {
        super(message)
        this.message = message;
        this.statusCode = statusCode;
        this.data = null;
        this.errors = errors;
        this.success = false;
        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

function customErrorFunc() {
    try {
        throw new CustomError("Custom Error Something went wrong")
    } catch (error) {
        console.log("Custom Error", error.message)
    }
}

customErrorFunc();

console.log("___Task-5___");

function validateUserInput(input) {
    try {
        if (input === "" || input === null || input === undefined) {
            throw new CustomError("Input Field must be required")
        }
        console.log("Input is valid", input);
    } catch (error) {
        if (error instanceof CustomError) {
            console.error(`CustomError: Required the message (Status: 500)`);
        } else {
            throw new CustomError(500, "Unexpected error occurred", [], error.stack);
        }
    }
}

validateUserInput("");
validateUserInput("Hello World");

// Activity-4: Error Handling in Promise
console.log("___Task-6___");

function randomPromise() {
    return new Promise((res, rej) => {
        const isSuccess = Math.random() > 0.5;
        setTimeout(() => {
            if (isSuccess) {
                res("Promise Resolved Successfully");
            } else {
                rej("Promise rejected due to error");
            }
        }, 1000)
    });
};

randomPromise()
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log("An error occurred", error);
    })


console.log("___Task-7___");

async function handlePromise() {
    try {
        const response = await randomPromise();
        console.log(response);
    } catch (error) {
        console.error("An error occurred", error);
    }
}

handlePromise();

// Activity-5: Graceful Error Handling in fetch
console.log("___Task-8___");

function fetchData() {
    let invalidUrl = "https://invalid.url.example";

    fetch(invalidUrl)
        .then((response) => {
            if (!response.ok) {
                throw new CustomError("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            console.log("Data received:", data);
        })
        .catch((error) => {
            console.log("There was a problme with the fetch operation:", error);
        })
}

fetchData()

console.log("___Task-9___");

async function fetchData() {
    const invalidUrl = "https://invalid.url.example";
    try {
        const response = await fetch(invalidUrl);
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        const data = await response.json();
        console.log("Data received:", data);
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
    }
}

fetchData();