function randomInteger(min, max) {
	let randomDecimal = min + (Math.random() * (max - min + 1));
	let randomInteger = Math.floor(randomDecimal);

	return randomInteger;
}

console.log(randomInteger(10, 20));