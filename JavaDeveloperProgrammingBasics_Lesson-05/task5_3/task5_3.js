function ucFirst(str) {
	let firstChar = str.charAt(0).toUpperCase();
	let remainingString = str.substring(1);
	let ucFirstString = firstChar + remainingString;

	return ucFirstString;
}

console.log(ucFirst("vasya"));
console.log(ucFirst(""));