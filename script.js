let num1 = null;
let num2 = null;
let operator = null;

const operations = (function () {
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
		if (b === 0) {
			return "Ask a mathematician! I'm just a calcualator!";
		}
		return a / b;
	}

	function operate(a, b, operator) {
		html.setDisplay(operator(a, b));
		return operator(a, b);
	}

	return {
		add,
		subtract,
		multiply,
		divide,
		operate,
	};
})();

const html = (function () {
	const display = document.getElementById("display");
	const oneBtn = document.getElementById("btnOne");
	const twoBtn = document.getElementById("btnTwo");
	const threeBtn = document.getElementById("btnThree");
	const fourBtn = document.getElementById("btnFour");
	const fiveBtn = document.getElementById("btnFive");
	const sixBtn = document.getElementById("btnSix");
	const sevenBtn = document.getElementById("btnSeven");
	const eightBtn = document.getElementById("btnEight");
	const nineBtn = document.getElementById("btnNine");
	const zeroBtn = document.getElementById("btnZero");
	const clearBtn = document.getElementById("btnClear");
	const equalBtn = document.getElementById("btnOperate");
	const addBtn = document.getElementById("btnAdd");
	const subtractBtn = document.getElementById("btnSubtract");
	const multiplyBtn = document.getElementById("btnMultiply");
	const divideBtn = document.getElementById("btnDivide");

	(function () {
		oneBtn.addEventListener("click", () => {
			setNums(1);
		});

		twoBtn.addEventListener("click", () => {
			setNums(2);
		});

		threeBtn.addEventListener("click", () => {
			setNums(3);
		});

		fourBtn.addEventListener("click", () => {
			setNums(4);
		});

		fiveBtn.addEventListener("click", () => {
			setNums(5);
		});

		sixBtn.addEventListener("click", () => {
			setNums(6);
		});

		sevenBtn.addEventListener("click", () => {
			setNums(7);
		});

		eightBtn.addEventListener("click", () => {
			setNums(8);
		});

		nineBtn.addEventListener("click", () => {
			setNums(9);
		});

		zeroBtn.addEventListener("click", () => {
			setNums(0);
		});

		clearBtn.addEventListener("click", clearAll);

		equalBtn.addEventListener("click", () => {
			// operate(num1, num2, operator);
			num1 = operations.operate(num1, num2, operator);
			num2 = null;
			operator = null;
		});

		addBtn.addEventListener("click", () => {
			if (num1 === null) {
				setDisplay("Start with a number first.");
			} else if (operator === null) {
				operator = operations.add;
				operatorSign = "+";
				setDisplay(num1 + operatorSign);
			} else {
				num1 = operations.operate(num1, num2, operator);
				num2 = null;
				operator = operations.add;
				operatorSign = "+";
				setDisplay(num1 + operatorSign);
			}
		});

		subtractBtn.addEventListener("click", () => {
			if (num1 === null) {
				setDisplay("Start with a number first.");
			} else if (operator === null) {
				operator = operations.subtract;
				operatorSign = "-";
				setDisplay(num1 + operatorSign);
			} else {
				num1 = operations.operate(num1, num2, operator);
				num2 = null;
				operator = operations.subtract;
				operatorSign = "-";
				setDisplay(num1 + operatorSign);
			}
		});

		multiplyBtn.addEventListener("click", () => {
			if (num1 === null) {
				setDisplay("Start with a number first.");
			} else if (operator === null) {
				operator = operations.multiply;
				operatorSign = "*";
				setDisplay(num1 + operatorSign);
			} else {
				num1 = operations.operate(num1, num2, operator);
				num2 = null;
				operator = operations.multiply;
				operatorSign = "*";
				setDisplay(num1 + operatorSign);
			}
		});

		divideBtn.addEventListener("click", () => {
			if (num1 === null) {
				setDisplay("Start with a number first.");
			} else if (operator === null) {
				operator = operations.divide;
				operatorSign = "/";
				setDisplay(num1 + operatorSign);
			} else {
				num1 = operations.operate(num1, num2, operator);
				num2 = null;
				operator = operations.divide;
				operatorSign = "/";
				setDisplay(num1 + operatorSign);
			}
		});
	})();

	function setDisplay(displayValue) {
		display.innerText = displayValue;
	}

	return {
		setDisplay,
	};
})();

function clearAll() {
	num1 = null;
	num2 = null;
	operator = null;
	html.setDisplay(0);
}

function setNums(digit) {
	if (num1 === null) {
		num1 = digit;
		html.setDisplay(num1);
	} else if (num1 !== null && operator === null) {
		num1 += `${digit}`;
		num1 = Number(num1);
		html.setDisplay(num1);
	} else if (num1 !== null && operator !== null && num2 === null) {
		num2 = digit;
		html.setDisplay(num1 + operatorSign + num2);
	} else if (num1 !== null && operator !== null && num2 !== null) {
		num2 += `${digit}`;
		num2 = Number(num2);
		html.setDisplay(num1 + operatorSign + num2);
	}
}

// set welcome notice
html.setDisplay("Welcome!");
