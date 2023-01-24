/**
 * @param {number} x
 * @return {boolean}
 */
let isPalindrome = (x) => {
	if (x < 0) return false;
	else if (x === 0) {
		return true;
	} else {
		let str = x.toString();

		for (let i = 0; i < str.length; i++) {
			if (str[i] !== str[str.length - i - 1]) return false;
		}

		return true;
	}
};
