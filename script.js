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
decimal.setAttribute("id", "decimal");
decimal.textContent = ".";
divNumbers.insertBefore(decimal, document.getElementById("0"));

const clear = document.createElement("button");
clear.classList.add("miscButtons");
clear.setAttribute("id", "clear");
clear.textContent = "AC";
divNumbers.appendChild(clear);

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

//functions for number buttons
const display = document.getElementById("display");
const numberButtons = Array.from(document.getElementsByClassName("numbers"));

numberButtons.forEach(button => {
    button.addEventListener("click", function(e) {
        if (display.textContent.charAt(0) === "\n") {
            display.textContent = "";
        };
        display.textContent += `${e.target.textContent}`;
    });
});

//separate function for decimal
decimal.addEventListener("click", function(e) {
    if (decimal.classList.length !== 2) {
        (display.textContent.charAt(0) === "\n") ? display.textContent = "0." : display.textContent += ".";
        decimal.classList.add("disabled");
    };
});

//functions for operations buttons
let operationSelected = false;
let storage = "";
const operationsButtons = Array.from(document.getElementsByClassName("operations"));

operationsButtons.forEach(button => {
    button.addEventListener("click", function(e) {
        storage = display.textContent;
        display.textContent = `\n` + display.textContent;
        decimal.classList.remove("disabled");
        if (operationSelected = true) {
            operationsButtons.forEach(button => button.classList.remove("selected"));
        }
        operationSelected = true;
        e.target.classList.add("selected");
    });
});

//function for equal button
const equal = document.getElementById("equal");
equal.addEventListener("click", function() {
    let operation = document.getElementsByClassName("selected")[0].getAttribute("id");
    if ((storage) && (operation) && ((display.textContent.charAt(0) !== "\n"))) {
        console.log(storage);
        console.log(operation);
        console.log(display.textContent);
        const result = operate(operation, storage, display.textContent);
        console.log(result);
        display.textContent = `\n${result}`;
        operationsButtons.forEach(button => button.classList.remove("selected"));
        decimal.classList.remove("disabled");
    } else {
        alert("Error!");
    }
});

//function for clear button
clear.addEventListener("click", function() {
    operationSelected = false;
    operationsButtons.forEach(button => button.classList.remove("selected"));
    decimal.classList.remove("disabled");
    display.textContent = "\n0";
    storage = "";
})

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
    a = Number(a);
    b = Number(b);
    switch (operator) {
        case "add": return add(a,b); break;
        case "subtract": return subtract(a,b); break;
        case "multiply": return multiply(a,b); break;
        case "divide": return divide(a,b); break;
    }
}


