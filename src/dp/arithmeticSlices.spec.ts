import {assert} from 'chai';

function numberOfArithmeticSlices(nums: number[]): number {

	if(!nums || nums.length <= 2) {
		return 0;
	}
	let count = 0;
	let res = 0;
	for(let i = 2; i < nums.length; i++) {
		if(nums[i] - nums[i-1] === nums[i-1] - nums[i-2]) {
			count++;
		} else {
			count = 0;
		}
		res+=count;
	}

	return res;

};

function numberOfArithmeticSlicesDp(nums: number[]): number {

	if(!nums || nums.length < 3) {
		return 0;
	}
	const dp: number[] = new Array<number>(nums.length).fill(0);
	let res = 0;
	for(let i = 2; i < nums.length; i++) {
		if(nums[i] - nums[i-1] === nums[i-1] - nums[i-2]) {
			dp[i] = dp[i-1] + 1;
			res+=dp[i];
		} 
	}

	return res;

};

describe('Arthimetic Slices ', () => {
	it('nums = [1,2,3,4] ===> 3', () => {
		assert.equal(numberOfArithmeticSlices([1,2,3,4]), 3);
	})

	it('nums = [1,2,3,4] ===> 3', () => {
		assert.equal(numberOfArithmeticSlicesDp([1,2,3,4]), 3);
	})
})