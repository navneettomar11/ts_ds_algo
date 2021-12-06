import {assert} from 'chai';

function maxSubArray(nums: number[]): number {
	if(!nums || nums.length === 0) {
		return 0;
	}
	let gloabalMax = nums[0];
	let localMax = nums[0];

	for(let i = 1; i < nums.length; i++) {
		localMax = Math.max(nums[i], nums[i] + localMax);
		gloabalMax = Math.max(gloabalMax, localMax);
	}

	return gloabalMax;

};

describe('Maximun sum subarray', () => {
	it('nums = [-2,1,-3,4,-1,2,1,-5,4] ===> 6', () => {
		assert.equal(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]), 6);
	});
})