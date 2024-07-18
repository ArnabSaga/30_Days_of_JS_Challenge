// Activity-1: Array Creation and Access
console.log("___Task-1");

let arr = [1, 2, 3, 4, 5];
console.log("Print the array values:", arr);

console.log("___Task-2");

console.log(`Access the first element of the array: [${arr[0]}] and the last element of the array: [${arr[4]}]`);


// Activity-2: Array Methods(Basic)
console.log("___Task-3");

arr.push(6);
console.log(`Add new number [${arr}] to the end of the array using push method`);

console.log("___Task-4");

arr.pop();
console.log(`Remove new number [${arr}] to the end of the array using push method`);

console.log("___Task-5");

arr.shift();
console.log(`Remove new number [${arr}] to the start of the array using shift method`);

console.log("___Task-6");

arr.unshift(1);
console.log(`Add new number [${arr}] to the start of the array using unshift method`);


// Activity-3: Array Methods(Intermediate)

console.log("___Task-7");

const newArrMap = arr.map((num) => num * num)
console.log(`New Array: [${newArrMap}] where each number is double form the previous array: [${arr}]`);

console.log("___Task-8");

const newArrFilter = arr.filter((num) => {
    let even = num % 2
    if (even === 0) {
        return num
    }
});
console.log(newArrFilter);

console.log("___Task-9");

const sum = arr.reduce((acc, currVal) => {
    return acc + currVal;
})
console.log(`The sum of all numbar in the array ${sum}`);

// Activity-4: Array Iteration
console.log("___Task-10");

for (let i = 0; i < arr.length; i++) {
    const element = arr[i]
    console.log(`Iteration over the array use for loop [${element}]`);
}

console.log("___Task-11");

arr.forEach((element) => {
    console.log(`Iteration over the array use forEach loop [${element}]`);
});

// Activity-5: Multi-Dimensional Array 
console.log("___Task-12");
function create2dArray(rows, cols) {
    {
        const matrix = [];
        for (let i = 0; i < rows; i++) {
            matrix[i] = new Array(cols).fill(0);
        }
        for (let i = 0; i < rows; i++) {
            console.log(matrix[i]);
        }
    }
}
create2dArray(3, 4);

console.log("___Task-13");
function accessAndLogElement(matrix, row, col) {
    if (row < 0 || row >= matrix.length || col < 0 || col >= matrix[0].length) {
        console.log("Invalid rows and cols");
        return;
    }
    const element = matrix[row][col];
    console.log(`element at row ${row} coloum ${col}:`, element);
}
const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

accessAndLogElement(matrix, 1, 2);