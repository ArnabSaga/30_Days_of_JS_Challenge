// Activity-1: Selecting and Manipulating Elements
console.log("___Task-1___");

let idPara = document.querySelector("#para1").innerHTML = "Changed it text content";

console.log("___Task-2___");

let classPara = document.querySelector(".para2").style.backgroundColor = "red";

// Activity-2: Creating and Appending Elements
console.log("___Task-3___");

let body = document.querySelector("body").append(
    document.createElement("div").innerHTML = "I am newly created in this body section"
);

console.log("___Task-4___");

let navbar = document.querySelector(".navbar").append(
    document.createElement("li").innerHTML = "Contact"
)

// Activity-3: Removing Elements
console.log("___Task-5___");

let removeElementOne = document.querySelector(".activityThree .activityThreePara1").remove();

console.log("___Task-6___");

function removeBtn() {
    let removeElementLast = document.querySelector(".activityThree");
    if (removeElementLast.lastElementChild.tagName.toLowerCase() === 'button') {
        removeElementLast.removeChild(removeElementLast.lastElementChild);
    }
    if (removeElementLast.lastElementChild) {
        removeElementLast.removeChild(removeElementLast.lastElementChild);
    }
}

// Activity-4: Modifying Attributes and Classes
console.log("___Task-7___");

function changeImageSource() {
    let imgElement = document.querySelector("#myImg");
    imgElement.setAttribute("src", "https://imgs.search.brave.com/kWh_6AQWS9PTr_gkaZJlxXZP8RWHRDZQcUqNzXigZqU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dzNzY2hvb2xzLmNv/bS93aGF0aXMvaW1n/X3JlYWN0LmpwZw")
}

console.log("___Task-8___");

function toggleHighlight() {
    let paragraph = document.getElementById("myPara");
    paragraph.classList.toggle("highlight");
}

// Activity-5: Event Handling
console.log("___Task-9___");

document.getElementById("changeTextButton").addEventListener("click", function () {
    let paragraph = document.getElementById("myText");
    paragraph.textContent = "This is the new text.";
});

console.log("___Task-10___");

let box = document.getElementById("hoverBox");

box.addEventListener("mouseover", function () {
    box.style.borderColor = "red";
});

box.addEventListener("mouseout", function () {
    box.style.borderColor = "black";
});