import {assert} from 'chai';

export function isValidSubsequence(array: number[], sequence: number[]) {
	let j = 0;
	for(let i = 0; i < array.length; i++) {
		if(j === sequence.length) break;
		if(array[i] === sequence[j]) {
			j++;
		}
	}
	return j === sequence.length;
}


describe('Valid Subsequence', () => {
	it('arr = [5, 1, 22, 25, 6, -1, 8, 10], seq = [1, 6, -1, 10] ==> True', () => {
		assert.isTrue(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]));
	})
})


