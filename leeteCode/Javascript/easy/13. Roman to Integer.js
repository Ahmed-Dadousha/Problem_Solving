/**
 * @param {string} s
 * @return {number}
 */
let romanToInt = (s) => {
	let output = 0;
	const romanNumbersRepresentation = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
	const romanNumbers = [1, 5, 10, 50, 100, 500, 1000];

	for (let i = 0; i < s.length; i++) {
		switch (s[i] + s[i + 1]) {
			case 'IV':
				output += 4;
				i += 1;
				break;
			case 'IX':
				output += 9;
				i += 1;
				break;
			case 'XL':
				output += 40;
				i += 1;
				break;
			case 'XC':
				output += 90;
				i += 1;
				break;
			case 'CD':
				output += 400;
				i += 1;
				break;
			case 'CM':
				output += 900;
				i += 1;
				break;
			default:
				for (let j = 0; j < romanNumbersRepresentation.length; j++) {
					if (s[i] === romanNumbersRepresentation[j]) output += romanNumbers[j];
				}
		}
	}

	return output;
};
