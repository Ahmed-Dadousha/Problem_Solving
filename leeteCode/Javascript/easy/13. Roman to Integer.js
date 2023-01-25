/**
 * @param {string} s
 * @return {number}
 */
let romanToInt = (s) => {
	let output = 0;
	const romanNumbersRepresentation = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
	const romanNumbers = [1, 5, 10, 50, 100, 500, 1000];

	for (let i = 0; i < s.length; i++) {
		if (s[i] + s[i + 1] === 'IV') {
			output += 4;
			i += 1;
		} else if (s[i] + s[i + 1] === 'IX') {
			output += 9;
			i += 2;
		} else if (s[i] + s[i + 1] === 'XL') {
			output += 40;
			i++;
		} else if (s[i] + s[i + 1] === 'XC') {
			output += 90;
			i += 1;
		} else if (s[i] + s[i + 1] === 'CD') {
			output += 400;
			i += 1;
		} else if (s[i] + s[i + 1] === 'CM') {
			output += 900;
			i += 1;
		} else {
			for (let j = 0; j < romanNumbersRepresentation.length; j++) {
				if (s[i] === romanNumbersRepresentation[j]) output += romanNumbers[j];
			}
		}
	}

	return output;
};
