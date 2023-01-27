/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
	let stack = [];
	let pairs = {
		'(': ')',
		'[': ']',
		'{': '}',
	};

	if (s[0] === ')' || s[0] === ']' || s[0] === '}') return false;
	if (s[0] === ')' || s[0] === ']' || s[0] === '}') return false;
	if (s.length % 2 === 1) return false;

	for (let i = 0; i < s.length; i++) {
		if (s[i] === '(' || s[i] === '[' || s[i] === '{') stack.push(s[i]);
		else if (s[i] !== pairs[stack.pop()]) return false;
	}
	return stack.length === 0;
};
