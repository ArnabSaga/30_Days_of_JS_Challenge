// Activity-1: Creating and Exporting Modules

// console.log("___Task-1____");

import { sumOfAddTwoNum } from "./exportModules.js"
console.log(sumOfAddTwoNum);

// console.log("___Task-2____");

import { person } from "./exportModules.js";
console.log(person);

// Activity-2: Named and Default Export

// console.log("___Task-3____");

import { funcOne, funcTwo } from "./exportModules.js";
funcOne();
funcTwo();

// console.log("___Task-4____");

import funcThree from "./exportModules.js";
funcThree();

// Activity-3: Importing Entire Modules

// console.log("___Task-5____");

import { PI, multiplePI } from "./exportModules.js";
console.log("PI Value:", PI);
console.log("Multiple PI Value:", multiplePI());

// Activity-4: Using Third-Party Modules

// console.log("___Task-6____");

// Import lodash
const _ = require('lodash');

// Example array
const array = [1, 2, 3, 4, 5, 6, 7, 8];

// Use lodash's chunk function to split the array into chunks of 2
const chunkedArray = _.chunk(array, 2);

// Print the chunked array
console.log(chunkedArray); // [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ] ]

// console.log("___Task-7____");

// Import axios
const axios = require('axios');

// Define the URL for the GET request
const url = 'https://jsonplaceholder.typicode.com/posts/1';

// Make a GET request using axios
axios.get(url)
    .then(response => {
        // Handle the response
        console.log('Data:', response.data);
    })
    .catch(error => {
        // Handle the error
        console.error('Error:', error);
    });

// Activity-5: Module Bundling (Optional)

// console.log("___Task-8____");