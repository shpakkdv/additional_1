module.exports = function sum() {
	var allSum = 0;
	if (arguments.length === 0) {
		return allSum;
	} else {
		for (let i = 0; i < arguments.length; i++) {
			allSum += arguments[i];
		}
		return function nextSum() {
			if (arguments.length === 0) {
				let temp = allSum;
				allSum = 0;
				return temp;
			} else {
				for (let i = 0; i < arguments.length; i++) {
					allSum += arguments[i];
				}
				return nextSum;
			}
		}
	}
}