// Activity-1: Basic Event Handling
console.log("___Task-1___");

let paragraphOne = document.getElementById("paragraphOne");
let buttonOne = document.getElementById("buttonOne");

buttonOne.addEventListener("click", () => {
    paragraphOne.textContent = "You clicked on paragraph one!";
});

console.log("___Task-2___");

let imgTwo = document.getElementById("imgTwo");
let btnTwo = document.getElementById("btnTwo");

btnTwo.addEventListener("dblclick", () => {
    if (imgTwo.style.display === "none") {
        imgTwo.style.display = "block";
    } else {
        imgTwo.style.display = "none";
    }
});

// Activity-2: Mouse Events
console.log("___Task-3___");

let backgroupcolorChangeElement = document.getElementById("backgroupcolorChangeElement");

backgroupcolorChangeElement.addEventListener("mouseover", () => {
    backgroupcolorChangeElement.style.backgroundColor = "red";
});

console.log("___Task-4___");

backgroupcolorChangeElement.addEventListener("mouseout", () => {
    backgroupcolorChangeElement.style.backgroundColor = "blue";
});

// Activity-3: Keyboard Events
console.log("___Task-5___");

let inputKeyPressed = document.getElementById("inputKeyPressed");

inputKeyPressed.addEventListener("keydown", (event) => {
    console.log(`Key pressed: ${event.key}`);
});

console.log("___Task-6___");

let displayParagraph = document.getElementById("displayParagraph");

inputKeyPressed.addEventListener("keyup", (event) => {
    displayParagraph.textContent = `Last key pressed: ${event.target.value}`;
});

// Activity-4: From Events
console.log("___Task-7___");

let taskSevenFrom = document.getElementById("taskSevenFrom");
let taskSevenInput = document.getElementById("taskSevenInput");

taskSevenFrom.addEventListener("submit", (event) => {
    event.preventDefault();

    let intputValue = taskSevenInput.value;

    console.log("From Data:", intputValue);
});


console.log("___Task-8___");

let taskEightSelect = document.getElementById("taskEightSelect");
let taskEightDisplayParagraph = document.getElementById("taskEightDisplayParagraph");

taskEightSelect.addEventListener("change", (event) => {
    let selectedValue = event.target.value;

    taskEightDisplayParagraph.textContent = "Selected Language: " + selectedValue;
})

// Activity-5: Event Delegation
console.log("___Task-9___");

let taskNineList = document.querySelector(".taskNineList");

taskNineList.addEventListener("click", (event) => {
    if (event.target && event.target.nodeName === "LI") {
        console.log("Clicked item", event.target.textContent);
    }
})

console.log("___Task-10___");

let taskTenParentElement = document.querySelector(".taskTenParentElement");
let taskTenBtn = document.querySelector(".taskTenBtn");

taskTenBtn.addEventListener("click", (event) => {
    if (event.target && event.target.classList.contains("childElement")) {
        console.log("Clicked child Element:", event.target.textContent);
    }
});

function addChildElement() {
    let newChild = document.createElement("div");
    newChild.classList.add("ChildElement");
    newChild.textContent = "New Child Element";
    taskTenParentElement.appendChild(newChild);
}

taskTenBtn.addEventListener("click", addChildElement);



