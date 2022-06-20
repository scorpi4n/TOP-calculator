let num1 = 0
let num2 = 0
let operator

const display = document.getElementById('display')
    let displayValue = 'Welcome!'
    display.innerText = displayValue
const one = document.getElementById('btnOne')
    // one.addEventListener('click', )
const two = document.getElementById('btnTwo')
    // two.addEventListener('click', )
const three = document.getElementById('btnThree')
    // three.addEventListener('click', )
const four = document.getElementById('btnFour')
    // four.addEventListener('click', )
const five = document.getElementById('btnFive')
    // five.addEventListener('click', )
const six = document.getElementById('btnSix')
    // six.addEventListener('click', )
const seven = document.getElementById('btnSeven')
    // seven.addEventListener('click', )
const eight = document.getElementById('btnEight')
    // eight.addEventListener('click', )
const nine = document.getElementById('btnNine')
    // nine.addEventListener('click', )
const zero = document.getElementById('btnZero')
    // zero.addEventListener('click', )
const clear = document.getElementById('btnClear')
    // clear.addEventListener('click', )
const equal = document.getElementById('btnOperate')
    equal.addEventListener('click', operate(num1, num2, operator))
const addition = document.getElementById('btnAdd')
    addition.addEventListener('click', () => {
        operator = add
    })
const subtraction = document.getElementById('btnSubtract')
    subtraction.addEventListener('click', () => {
        operator = subtract
    })
const multiplication = document.getElementById('btnMultiply')
    multiplication.addEventListener('click', () => {
        operator = multiply
    })
const division = document.getElementById('btnDivide')
    division.addEventListener('click', () => {
        operator = divide
    })

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
function clearAll() {
    num1 = 0
    num2 = 0
    operator = null
    displayValue = 0
    display.innerText = displayValue
}



// 1 + 2
// 
// hit btnOne => set display to 1, store value for operate()
// hit btnAdd => change color of btnAdd, store operator for operate()
// hit btnTwo => store value for operate() and execute