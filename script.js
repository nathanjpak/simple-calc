const divNumbers = document.getElementById("numbers");
const divOperations = document.getElementById("operations");

//create buttons for numbers
for (i=9; i>=0; i--) {
    const newButton = document.createElement("button");
    newButton.classList.add("numbers");
    newButton.setAttribute("id", `${i}`)
    newButton.textContent = `${i}`;
    divNumbers.appendChild(newButton);
}

const decimal = document.createElement("button");
decimal.classList.add("miscButtons");
decimal.textContent = ".";
divNumbers.insertBefore(decimal, document.getElementById("0"));

//create buttons for operations

const operations = ["divide", "multiply", "subtract", "add", "equal"]
operations.forEach(name => {
    const newButton = document.createElement("button");
    newButton.classList.add("operations");
    newButton.setAttribute("id", `${name}`);
    switch(name) {
        case "divide":
            newButton.textContent = "\u00f7";
            break;
        case "multiply":
            newButton.textContent = "\u00d7";
            break;
        case "subtract":
            newButton.textContent = "-";
            break;
        case "add":
            newButton.textContent = "+";
            break;
        default:
            newButton.textContent = "=";
            newButton.classList.remove("operations");
    }
    divOperations.appendChild(newButton);    
});

//functions for buttons
const display = document.getElementById("display");
const numberButtons = Array.from(document.getElementsByClassName("numbers"));

numberButtons.forEach(button => {
    button.addEventListener("click", function(e) {
        if (display.textContent.charAt(0) === "\n") {
            display.textContent = "";
        };
        display.textContent += `${e.target.getAttribute("id")}`;
    });
});

//functions for operations
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    return operator(a,b);
}


