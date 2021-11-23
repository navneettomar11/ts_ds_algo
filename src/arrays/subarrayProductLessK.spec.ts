import {assert} from 'chai';


function numSubarrayProductLessThanK(nums: number[], k: number): number {
	if(!nums || nums.length === 0 || k <= 1) {
		return 0;
	}
	let product = 1;
	let start = 0;
	let count = 0;
	for(let end = 0; end < nums.length; end++) {
		product*=nums[end];
		while(product >= k) product/=nums[start++];
		count += end - start + 1;
	}

	return count;
};

describe('Subarray Product Less than K', () => {
	it('nums = [10,5,2,6], k = 100', () => {
		const result = numSubarrayProductLessThanK([10,5,2,6], 100);
		assert.equal(result, 8);
	});
	it('nums = [1,2,3], k = 0', () => {
		const result = numSubarrayProductLessThanK([1,2,3], 0);
		assert.equal(result, 0);
	});
	it('nums = [10,9,10,4,3,8,3,3,6,2,10,10,9,3], k = 19', () => {
		const result = numSubarrayProductLessThanK([10,9,10,4,3,8,3,3,6,2,10,10,9,3], 19);
		assert.equal(result, 18);
	});
})