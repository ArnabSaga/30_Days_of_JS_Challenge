// Activity-1: Class Definition
console.log("___Task-1___");

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.firstName} and I am ${this.age} years old.`);
    }
    updateAge(newAge) {
        this.age = newAge;
        console.log(`Age update to ${this.age}`);
    }

    static genericGreeting() {
        return `This is a generic greeting message`;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(newName) {
        const [firstName, lastName] = newName.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let firstPerson = new Person("Arnab", 22);
firstPerson.greet();

console.log("___Task-2___");

firstPerson.updateAge(23);
firstPerson.greet();

// Activity-2: Class Inheritance
console.log("___Task-3___");

class Student extends Person {
    static studentCount = 0;

    constructor(firstName, lastName, age, studentID) {
        super(firstName, lastName, age);
        this.studentID = studentID;
        Student.studentCount += 1;
    }

    getStudentId() {
        return this.studentID;
    }

    newGreet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentID}.`);
    }

    static trackStudentCount() {
        return Student.studentCount;
    }
}

let student = new Student("Arnab", 23, "613");
// console.log(Student.trackStudentCount());

student.greet();
console.log(`Student ID : ${student.getStudentId()}`);

console.log("___Task-4___");

student.newGreet();

// Activity-3: Static Methods and Properties
console.log("___Task-5___");

console.log(
    Person.genericGreeting()
);

console.log("___Task-6___");

const studentOne = new Student("Avi", 25, "817");
console.log(Student.trackStudentCount());

const studentTwo = new Student("Anubhav", 24, "614");
console.log(Student.trackStudentCount());

// Activity-4: Getters and Setters
console.log("___Task-7___");

const personFour = new Person("Arnab", "Dey", 23);
console.log(personFour.fullName);

console.log("___Task-8___");

const personFive = new Person("Arnab", "Dey", 23);
console.log(personFive.fullName);
personFive.fullName = 'Adi Dey';
console.log(personFive.fullName);

// Activity-5: Private Fields
console.log("___Task-9___");

class Account {
    #balance;

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: ${amount}. New Balance: ${this.#balance}`);
        } else {
            console.log("Deposit amount must be postive");
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrew: ${amount}. New Balance: ${this.#balance}`);
        }else {
            console.log("Invalid withdraw amount");
        }
    }

    getBalance() {
        return this.#balance;
    }
}

console.log("___Task-10___");

const account = new Account(1000);
account.deposit(500);
console.log(`Current balance: ${account.getBalance()}`);
account.withdraw(200);
console.log(`Current balance: ${account.getBalance()}`);
account.withdraw(2000);
console.log(`Current balance: ${account.getBalance()}`);