const selectionOperator = "Please Select Operator : \nCollection : +\nSubtraction : -\nMultiplication : *\nDivision : /";
const firstNumberMessage = "Please Enter First Number :";
const secondNumberMessage = "Please Enter Second Number :";
const secondNumberNotZero = "Second Number Cannot Be Zero.";
const refreshPage = "Refresh the page for a new process";
const invalidSelection = "Invalid Selection";
const answer = "Answer :"
const collection = "+";
const subtraction = "-";
const multiplication = "*";
const division = "/";

let firstNumber = Number(prompt(firstNumberMessage));
let operator = prompt(selectionOperator);
let secondNumber = Number(prompt(secondNumberMessage));

if (!isNaN(firstNumber) && !isNaN(secondNumber)) {

  if (operator === collection) {
    alert(`${answer} ${firstNumber + secondNumber}`);
  } else if (operator === subtraction) {
    alert(`${answer} ${firstNumber - secondNumber}`);
  } else if (operator === multiplication) {
    alert(`${answer} ${firstNumber * secondNumber}`);
  } else if (operator === division) {

    if (secondNumber === 0) {
      alert(secondNumberNotZero);
    }else {
      alert(`${answer} ${firstNumber / secondNumber}`);
    }

  } else {
    alert(invalidSelection);
  }
  
} else {
  alert(invalidSelection);
}