const display = document.getElementById('display')

let displayValue = 0
display.innerText = displayValue

function add(a, b) {
    return a + b
}
function subtract(a, b) {
    return a - b
}
function multiply(a, b) {
    return a * b
}
function divide(a, b) {
    if (b === 0) {
        return "Ask a mathematician! I'm just a calcualator!"
    }
    return a / b
}
function operate(a, b, operator) {
    setDisplay(operator(a, b))
    return operator(a, b)
}
function setDisplay(displayValue) {
    display.innerText = displayValue
}