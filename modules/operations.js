import { calculator } from "./utils.js";

export function add(a, b) {
	return a + b;
}

export function subtract(a, b) {
	return a - b;
}

export function multiply(a, b) {
	return a * b;
}

export function divide(a, b) {
	if (b === 0) {
		return "Ask a mathematician! I'm just a calcualator!";
	}
	return a / b;
}

export function operate(a, b, operator) {
	calculator().setDisplay(operator(a, b));
	return operator(a, b);
}
