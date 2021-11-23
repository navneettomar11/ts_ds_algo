import {expect} from 'chai';

function longestPalindrome(s: string): number {
	const countMap = new Map<string, number>();
	for(let i = 0; i < s.length; i++) {
		let count= countMap.get(s.charAt(i)) || 0;
		countMap.set(s.charAt(i), count + 1);
	}
	let ans = 0;
	countMap.forEach((v, k) => {
		ans += Math.trunc(v/2) * 2;
		if(ans % 2 === 0 && Math.trunc(v % 2) === 1) {
			ans++;
		}
	});

	return ans;
};


describe('Longest Plaindrome', () => {
	it('abccccdd ===> 7', () => {
		const result = longestPalindrome("abccccdd");
		expect(result).to.equal(7);
	});

	
});