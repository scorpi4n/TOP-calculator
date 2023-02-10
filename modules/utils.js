let num1 = null;
let num2 = null;
let operator = null;
let operatorSign = null;

import {
	addBtn,
	clearBtn,
	divideBtn,
	eightBtn,
	equalBtn,
	fiveBtn,
	fourBtn,
	multiplyBtn,
	nineBtn,
	oneBtn,
	sevenBtn,
	sixBtn,
	subtractBtn,
	threeBtn,
	twoBtn,
	zeroBtn,
} from "./domElements.js";
import { add, divide, multiply, operate, subtract } from "./operations.js";

export function calculator() {
	function setDisplay(displayValue) {
		display.innerText = displayValue;
	}

	return {
		setDisplay,
	};
}

export function clearAll() {
	num1 = null;
	num2 = null;
	operator = null;
	calculator().setDisplay(0);
}

export function setNums(digit) {
	if (num1 === null) {
		num1 = digit;
		calculator().setDisplay(num1);
	} else if (num1 !== null && operator === null) {
		num1 += `${digit}`;
		num1 = Number(num1);
		calculator().setDisplay(num1);
	} else if (num1 !== null && operator !== null && num2 === null) {
		num2 = digit;
		calculator().setDisplay(num1 + operatorSign + num2);
	} else if (num1 !== null && operator !== null && num2 !== null) {
		num2 += `${digit}`;
		num2 = Number(num2);
		calculator().setDisplay(num1 + operatorSign + num2);
	}
}

export function setup() {
	oneBtn.addEventListener("click", () => setNums(1));
	twoBtn.addEventListener("click", () => setNums(2));
	threeBtn.addEventListener("click", () => setNums(3));
	fourBtn.addEventListener("click", () => setNums(4));
	fiveBtn.addEventListener("click", () => setNums(5));
	sixBtn.addEventListener("click", () => setNums(6));
	sevenBtn.addEventListener("click", () => setNums(7));
	eightBtn.addEventListener("click", () => setNums(8));
	nineBtn.addEventListener("click", () => setNums(9));
	zeroBtn.addEventListener("click", () => setNums(0));
	clearBtn.addEventListener("click", clearAll);

	equalBtn.addEventListener("click", () => {
		num1 = operate(num1, num2, operator);
		num2 = null;
		operator = null;
	});

	addBtn.addEventListener("click", () => {
		if (num1 === null) {
			calculator().setDisplay("Start with a number first.");
		} else if (operator === null) {
			operator = add;
			operatorSign = "+";
			calculator().setDisplay(num1 + operatorSign);
		} else {
			num1 = operate(num1, num2, operator);
			num2 = null;
			operator = add;
			operatorSign = "+";
			calculator().setDisplay(num1 + operatorSign);
		}
	});

	subtractBtn.addEventListener("click", () => {
		if (num1 === null) {
			calculator().setDisplay("Start with a number first.");
		} else if (operator === null) {
			operator = subtract;
			operatorSign = "-";
			calculator().setDisplay(num1 + operatorSign);
		} else {
			num1 = operate(num1, num2, operator);
			num2 = null;
			operator = subtract;
			operatorSign = "-";
			calculator().setDisplay(num1 + operatorSign);
		}
	});

	multiplyBtn.addEventListener("click", () => {
		if (num1 === null) {
			calculator().setDisplay("Start with a number first.");
		} else if (operator === null) {
			operator = multiply;
			operatorSign = "*";
			calculator().setDisplay(num1 + operatorSign);
		} else {
			num1 = operate(num1, num2, operator);
			num2 = null;
			operator = multiply;
			operatorSign = "*";
			calculator().setDisplay(num1 + operatorSign);
		}
	});

	divideBtn.addEventListener("click", () => {
		if (num1 === null) {
			calculator().setDisplay("Start with a number first.");
		} else if (operator === null) {
			operator = divide;
			operatorSign = "/";
			calculator().setDisplay(num1 + operatorSign);
		} else {
			num1 = operate(num1, num2, operator);
			num2 = null;
			operator = divide;
			operatorSign = "/";
			calculator().setDisplay(num1 + operatorSign);
		}
	});
}
