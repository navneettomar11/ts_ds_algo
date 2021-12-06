import {assert} from 'chai';

/**
 *  Need to understand this algo again
 * @param nums 
 */
function maxSubarraySumCircular(nums: number[]): number {
	let sum = nums.reduce((a, b) => a + b);
	if(nums.length === 1) {
		return sum;
	}

	const ans1 = kadane(nums, 0, nums.length - 1, 1);
	const ans2 = sum + kadane(nums, 1, nums.length - 1, -1);
	const ans3 = sum + kadane(nums, 0, nums.length - 2, -1);
	console.log(ans1, ans2, ans3, sum);
	return Math.max(ans1, ans2, ans3);
};

function kadane(nums: number[], i: number, j: number, sign: number): number {
	let ans = Number.MIN_SAFE_INTEGER;
	let cur = Number.MIN_SAFE_INTEGER;
	for(let k = i ; k <=j ; k++) {
		cur = sign * nums[k] + Math.max(cur, 0);
		ans = Math.max(ans, cur);
	}
	return ans 	;
}


describe('Maximum Sum Circular Subarray', () => {
	it('nums = [1,-2,3,-2] ===> 3', () => {
		assert.equal(maxSubarraySumCircular([1,-2,3,-2]), 3);
	});
	it('nums = [-2,-3,-1] ===> -1', () => {
		assert.equal(maxSubarraySumCircular([-2,-3,-1]), -1)
	})
})