let myButton = document.querySelector("button");
let userInput1;
let userInput2;
let num0;
let num1;
let setOperation;
let operation = ["+", "-", "x", "*", "/"];
let answer;

function getNumber0() {
    const num0 = prompt("Please enter the first value.");
}

function getNumber1() {
    const num1 = prompt("Please enter the second value.");
}

function getOperator() {
    const setOperation = prompt("Please enter an operator (+, -, x, * OR /).");
}
function getOperatorAgain() {
    const setOperation = prompt("The operator you have entered are unavailable. Please enter an operator again (+, -, x, * OR /).");
}

function add(num0, num1) {
    let answer = num0 + num1;
    return answer;
}
function subtract(num0, num1) {
    let answer = num0 - num1;
    return answer;
}
function multiply(num0, num1) {
    let answer = num0 * num1;
    return answer;
}
function divide(num0, num1) {
    let answer = num0 / num1;
    return answer;
}
myButton.onclick = function () {
    getNumber0();

    if (!localStorage.getItem("number0")) {
        getNumber0();
    } else {
        getOperator();
    }

    if (!localStorage.getItem("setOperation")) {
        getOperator();
    } else {
        getNumber1();
    }

    if (!localStorage.getItem("number1")) {
        getNumber1();
    }

    if (setOperation === operation[0]) {
        answer = num0 + num1;
    } else if (setOperation === operation[1]) {
        answer = num0 - num1;
    } else if (setOperation === operation[2] || operation[3]) {
        answer = num0 * num1;
    } else if (setOperation === operation[4]) {
        answer = num0 / num1;
    }

    alert(answer);
}