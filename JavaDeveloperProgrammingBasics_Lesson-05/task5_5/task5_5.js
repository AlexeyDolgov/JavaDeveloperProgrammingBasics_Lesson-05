function extractCurrencyValue(str) {
	return parseInt(str.substring(1));
}

console.log(extractCurrencyValue("$360"));