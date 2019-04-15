function getDecimal(num) {
	let decimal = Math.abs(num - parseInt(num));
	let decimalLength = num.toString().length - (num.toString().indexOf(".") + 1);
	let roundDecimal = Math.round(decimal * Math.pow(10, decimalLength)) / Math.pow(10, decimalLength);

	return roundDecimal;
}

console.log(getDecimal(12.345));
console.log(getDecimal(1.2));
console.log(getDecimal(-1.2));