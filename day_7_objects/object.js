// Activity-1: Object Creation and Access
console.log("___Task-1___");

let book = {

    title: "Js-Sage",
    author: "Arnab",
    year: 2022,
    getTitleAndAuthor: function () {
        return `Title: ${this.title}, Author: ${this.author}`
    },
    updateYearAndTitle: function (newYear, newTitle) {
        this.year = newYear;
        this.title = newTitle;
    }
};

console.log("Access all the property of book object:", book);

console.log("___Task-2___");

let title = book.title;
let author = book.author;
console.log(`The book is ${title} and The author is ${author}`);

// Activity-2: Object Methods
console.log("___Task-3___");

console.log(
    book.getTitleAndAuthor()
);

console.log("___Task-4___");

book.updateYearAndTitle(2024)
console.log(`The book is republised in ${book.year}`);

// Activity-3: Nested Object
console.log("___Task-5___");

const library = {
    name: "Public Library",
    books: [
        {
            bookOne: 1,
            title: "One Piece"
        },
        {
            bookTwo: 2,
            title: "Dragon Ball"
        }
    ]
}

console.log(library);

console.log("___Task-6___");
let bookOneTitle = library.books[0].title;
// console.log(bookOneTitle);
let bookTwoTitle = library.books[1].title;
// console.log(bookTwoTitle);
console.log(`The library is called ${library.name} and library books title is ${bookOneTitle} & ${bookTwoTitle}`);

// Activity-4: The 'This' Keyword
console.log("___Task-7___");

book.updateYearAndTitle(2020, "react-saga");
console.log(`update new book ${book.title} and publised ${book.year} `);

// Activity-5: Object Iteration
console.log("___Task-8___");

const books = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    genre: "Fiction"
};

for (const property in books) {
    if (book.hasOwnProperty(property)) {
        console.log(`${property}: ${books[property]}`);
    }
}

console.log("___Task-9___");

Object.keys(books).forEach(key => {
    console.log(key);
});

Object.values(books).forEach(value => {
    console.log(value);
});
