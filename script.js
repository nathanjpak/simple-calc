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
    console.log(name);
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
    }
    divOperations.appendChild(newButton);    
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


