import {assert} from 'chai';

function minSubArrayLen(target: number, nums: number[]): number {
	if(!nums || nums.length === 0) {
		return 0;
	}
	let start =0;
	let sum = 0;
	let min = Number.MAX_VALUE;
	for(let end = 0; end < nums.length; end++) {
		sum+=nums[end];
		while(sum >= target) {
			min = Math.min(end - start+ 1, min);
			sum-=nums[start++];
		}
		
	}

	return min === Number.MAX_VALUE ? 0 : min;
};

describe('Minimum Sub Array Size', () => {

	it('target = 7, nums = [2,3,1,2,4,3] ===> 2', () => {
		const result = minSubArrayLen(7, [2,3,1,2,4,3]);
		assert.equal(result, 2);
	});

	it('target = 4, nums = [1,4,4] ===> 1', () => {
		const result = minSubArrayLen(4, [1,4,4]);
		assert.equal(result, 1);
	});
});