// Activity-1: Understanding Promise
console.log("___Task-1___");

let resolveMessage = new Promise((resolve, reject) => {
    return setTimeout(() => {
        resolve("Task-1 resolved successfully");
    }, 2000)
})
resolveMessage.then(() => console.log("Resolve Done"));

console.log("___Task-2___");

let errorMessage = new Promise((resolve, reject) => {
    return setTimeout(() => {
        reject("There was an error");
    }, 2000)
})
errorMessage.catch((error) => console.log("There was some error" || error.message));
// Activity-2: Chaining Promise
console.log("___Task-3___");

let promiseOne = new Promise((res, rej) => {
    res("Go to Home");
});

let promiseTwo = promiseOne.then((data) => {
    console.log(data);
    return new Promise((res, rej) => {
        res("Make Food");
    });
});

let promiseThree = promiseTwo.then((data) => {
    console.log(data);
    return new Promise((res, rej) => {
        res("Go to Bed");
    });
});

promiseThree.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log("There was some error: " + error.message);
});

// Activity-3: Using Async/Await
console.log("___Task-4___");

async function asyncFunc() {
    let asyncPromise = new Promise((res, rej) => {
        return res("Please wait")
    });

    let result = await asyncPromise;
    console.log(result);
}
asyncFunc()

console.log("___Task-5___");

async function asyncRejectPromise() {
    try {
        let rejectPromise = new Promise((res, rej) => {
            setTimeout(() => {
                rej("This is a rejected Promise")
            }, 1000);
        });
        let rejectResult = await rejectPromise;
        console.log(rejectResult);
    } catch (error) {
        console.error('Promise rejected with error:', error.message);
    }
}

asyncRejectPromise();

// Activity-4: Fetching Data from an Api
console.log("___Task-6___");

const apiUrl = "https://jsonplaceholder.typicode.com/posts/1";

function fetchData() {
    fetch(apiUrl)
        .then(res => {
            if (!res.ok) {
                throw new Error(`HTTP error! status: 400`);
            }
            return res.json();
        })
        .then(data => console.log(data))
        .catch(err => console.error("Fetch Error :-S", err));
}

fetchData()

console.log("___Task-7___");

async function fetchDataTwo() {
    try {
        let response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`HTTP error! status: 400`);
        }
        let data = await response.json();
    } catch (error) {
        console.log("Error fetch data:", error.message);
    }
}

fetchDataTwo()
// Activity-5: Concurrent Promise
console.log("___Task-8___");

const apiUrl1 = 'https://jsonplaceholder.typicode.com/posts/1';
const apiUrl2 = 'https://jsonplaceholder.typicode.com/posts/2';
const apiUrl3 = 'https://jsonplaceholder.typicode.com/posts/3';

async function fetchMultipleData() {
    try {
        let promises = [
            fetch(apiUrl1).then(response => response.json()),
            fetch(apiUrl2).then(response => response.json()),
            fetch(apiUrl3).then(response => response.json())
        ];

        let results = await Promise.all(promises);
        console.log(results);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

fetchMultipleData();


console.log("___Task-9___");

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 1 resolved');
    }, 3000); 
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 2 resolved');
    }, 2000); 
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 3 resolved');
    }, 1000); 
});

Promise.race([promise1, promise2, promise3])
    .then(result => {
        console.log('First resolved value:', result);
    })
    .catch(error => {
        console.error('Error:', error);
    });