import {assert} from 'chai';

function longestPalindrome(s: string): string {
	if(!s || s.length === 0) {
		return '';
	}
	const len = s.length;
	let start = 0; 
	let end = 0;
	for(let i = 0; i < len; i++) {
		const lenOne = expandAroundCenter(s, i, i);
		const lenTwo = expandAroundCenter(s, i, i + 1);
		const max  = Math.max(lenOne, lenTwo);
		if(max > (end - start)) {
			start = i - Math.trunc((max - 1)/2);
			end = i + Math.trunc(max/2);
		}
	}	
	return s.substring(start, end + 1);
};

function expandAroundCenter(s: string, left: number, right: number): number {
	let l = left;
	let r = right;
	while(l >= 0 && r < s.length && s.charAt(l) === s.charAt(r)) {
		l-=1;
		r+=1;
	}
	
	return r - l - 1;
}
 
describe('Longest Palindrome Substring ', () => {
	xit('s = "babad" ===> "bab" || "aba" ', () => {
		const result = longestPalindrome('babad');
		assert.ok(result === 'bab' || result === 'aba');
	});
	it('s = "cbbd" ===> "bb" ', () => {
		const result = longestPalindrome('cbbd');
		assert.ok(result === 'bb' );
	});
	
});