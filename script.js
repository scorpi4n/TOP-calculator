let num1 = null
let num2 = null
let operator = null

const display = document.getElementById('display')
    setDisplay('Welcome!')
const btnOne = document.getElementById('btnOne')
    btnOne.addEventListener('click', () => {
        setNums(1)
    })
const btnTwo = document.getElementById('btnTwo')
    btnTwo.addEventListener('click', () => {
        setNums(2)
    })
const btnThree = document.getElementById('btnThree')
    btnThree.addEventListener('click', () => {
        setNums(3)
    })
const btnFour = document.getElementById('btnFour')
    btnFour.addEventListener('click', () => {
        setNums(4)
    })
const btnFive = document.getElementById('btnFive')
    btnFive.addEventListener('click', () => {
        setNums(5)
    })
const btnSix = document.getElementById('btnSix')
    btnSix.addEventListener('click', () => {
        setNums(6)
    })
const btnSeven = document.getElementById('btnSeven')
    btnSeven.addEventListener('click', () => {
        setNums(7)
    })
const btnEight = document.getElementById('btnEight')
    btnEight.addEventListener('click', () => {
        setNums(8)
    })
const btnNine = document.getElementById('btnNine')
    btnNine.addEventListener('click', () => {
        setNums(9)
    })
const btnZero = document.getElementById('btnZero')
    btnZero.addEventListener('click', () => {
        setNums(0)
    })
const btnClear = document.getElementById('btnClear')
    btnClear.addEventListener('click', clearAll)
const btnEqual = document.getElementById('btnOperate')
    btnEqual.addEventListener('click', () => {
        operate(num1, num2, operator)
        num1 = operate(num1, num2, operator)
        num2 = null
        operator = null
    })
const btnAdd = document.getElementById('btnAdd')
    btnAdd.addEventListener('click', () => {
        if (operator === null) {
            operator = add
            operatorSign = '+'
            setDisplay(num1 + operatorSign)
        } else {
            num1 = operate(num1, num2, operator)
            num2 = null
            operator = add
            operatorSign = '+'
            setDisplay(num1 + operatorSign)            
        }
    })
const btnSubtract = document.getElementById('btnSubtract')
    btnSubtract.addEventListener('click', () => {
        if (operator === null) {
            operator = subtract
            operatorSign = '-'
            setDisplay(num1 + operatorSign)
        } else {
            num1 = operate(num1, num2, operator)
            num2 = null
            operator = subtract
            operatorSign = '-'
            setDisplay(num1 + operatorSign)            
        }
    })
const btnMultiply = document.getElementById('btnMultiply')
    btnMultiply.addEventListener('click', () => {
        if (operator === null) {
            operator = multiply
            operatorSign = '*'
            setDisplay(num1 + operatorSign)
        } else {
            num1 = operate(num1, num2, operator)
            num2 = null
            operator = multiply
            operatorSign = '*'
            setDisplay(num1 + operatorSign)            
        }
    })
const btnDivide = document.getElementById('btnDivide')
    btnDivide.addEventListener('click', () => {
        if (operator === null) {
            operator = divide
            operatorSign = '/'
            setDisplay(num1 + operatorSign)
        } else {
            num1 = operate(num1, num2, operator)
            num2 = null
            operator = divide
            operatorSign = '/'
            setDisplay(num1 + operatorSign)            
        }
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
    num1 = null
    num2 = null
    operator = null
    setDisplay(0)
}
function setNums(digit) {
    if (num1 === null) {
        num1 = digit
        setDisplay(num1)
    } else if (num1 !== null && operator === null) {
        num1 += `${digit}`
        num1 = Number(num1)
        setDisplay(num1)
    } else if (num1 !== null && operator !== null && num2 === null) {
        num2 = digit
        setDisplay(num1 + operatorSign + num2)
    } else if (num1 !== null && operator !== null && num2 !== null) {
        num2 += `${digit}`
        num2 = Number(num2)
        setDisplay(num1 + operatorSign + num2)
    }
}