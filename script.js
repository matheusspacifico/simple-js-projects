const display = document.getElementById("display-screen");
const keys = document.querySelectorAll(".key");

let currInput = "";
let prevInput = "";
let operator = null;

function updateDisplay(value){
    display.textContent = value;
}

function handleButtonClick(e){
    const key = e.target;
    const value = key.textContent;

    if (key.classList.contains("operator")){
        handleOperator(value);
    } else if (key.id === "decimal"){
        addDecimal();
    } else if (key.id === "ac"){
        clearCalculator();
    } else if (key.id === "calculate"){
        calculateResult();
    } else {
        addNumber(value);
    }
}

function addNumber(number){
    if (currInput === "0") {
        currInput = number;
    } else {
        currInput += number;
    }
    updateDisplay(currInput);
}

function addDecimal(){
    if (!currInput.includes(".")){
        currInput += ".";
    }
    updateDisplay(currInput);
}

function handleOperator(value){
    if(currInput !== ""){
        operator = value;
        prevInput = currInput;
        currInput = "";
    }
}

function clearCalculator(){
    currInput = "";
    prevInput = "";
    operator = null;
    updateDisplay("0");
}

function calculateResult(){
    let result;

    const curr = parseFloat(currInput);
    const prev = parseFloat(prevInput);

    if (isNaN(prev) || isNaN(curr)) return;

    switch (operator) {
        case "+":
            result = prev + curr;
            break;
        case "-":
            result = prev - curr;
            break;
        case "*":
            result = prev * curr;
            break;
        case "/":
            if (curr === 0) {
                result = "Error";
            } else {
                result = prev / curr;
            }
            break;
        default:
            return;
    }

    currInput = result.toString();
    operator = null;
    prevInput = "";
    updateDisplay(currInput);
}

keys.forEach(k => {
    k.addEventListener("click", handleButtonClick);
})

updateDisplay("0");