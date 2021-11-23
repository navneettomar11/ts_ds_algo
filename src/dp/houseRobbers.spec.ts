import {assert} from 'chai';

function rob(nums: number[]): number {
	if(!nums || nums.length === 0) {
		return 0;
	}
	let n1 = 0;
	let n2 = nums[0];

	for(let i = 1; i < nums.length; i++) {
		const temp = Math.max(n1 + nums[i], n2);
		n1 = n2;
		n2 = temp;
	}
	return n2;
};


describe('House Robbers', () => {
	describe('Maximum amount robbed', () => {
		it('nums = [1,2,3,1] ===> 4', () => {
			const result = rob([1,2,3,1]);
			assert.equal(result, 4);
		});
	})
})
