import {assert} from 'chai';

function longest_substring_without_repeating_characters(s: string): number {

	const n = s.length;
	let longest = 0;
	let l= 0;
	let r = 0;
	const window = new Set<string>();
	while(r < n) {
		if(!window.has(s.charAt(r))) {
			window.add(s.charAt(r));
			r++;
		} else {
			window.delete(s.charAt(l));
			l++;
		}
		longest = Math.max(longest, r - l);
	}
	return longest;
}

describe('Longest Substring without repeating characters', () => {
	it('s = "abccabcabcc" ===> 3', () => {
		const result = longest_substring_without_repeating_characters("abccabcabcc");
		assert.equal(result, 3);
	})
});