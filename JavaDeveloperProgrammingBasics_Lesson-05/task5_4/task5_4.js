function checkSpam(str) {
	let strLowerCase = str.toLowerCase();
	let strUpperCase = str.toUpperCase();

	if (strLowerCase.indexOf("viagra") >= 0 || strUpperCase.indexOf("XXX") >= 0)
		return true
	else
		return false
}

console.log(checkSpam('buy ViAgRA now'))
console.log(checkSpam('free xxxxx'))
console.log(checkSpam('innocent rabbit'))