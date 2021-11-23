import {assert} from 'chai';

function isPalindrome(s: string): boolean {

	let l  = 0;
	let r = s.length  - 1;

	while (l < r && !isAlphaNumeric(s.charAt(l))) {  
		l++;
	}
	while (l < r && !isAlphaNumeric(s.charAt(r))) {
		r--;
	}
	if (s.charAt(l).toLowerCase() !== s.charAt(r).toLowerCase()) {  
		return false;
	}
	return true;
}



function isAlphaNumeric(c: string) {
    return /^[a-zA-Z0-9]*$/.test(c);
};

describe('is valid palindrome string', () => {
	it('s = Do geese see God ===> true', () => {
		const result = isPalindrome('Do geese see God');
		assert.isTrue(result);
	});
});