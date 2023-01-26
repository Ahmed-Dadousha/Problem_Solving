/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
	let prefix = '';
	let isCommen = true;
	let commenLetter = '';
	for (let i = 0; i < strs[0].length; i++) {
		if (strs.length === 1) return strs[0];

		for (let j = 1; j < strs.length; j++) {
			if (strs[0][i] !== strs[j][i]) isCommen = false;
			else commenLetter = strs[0][i];
		}
		if (isCommen) {
			prefix += commenLetter;
		}
	}
	return prefix;
};
