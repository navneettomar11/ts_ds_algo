import {assert} from 'chai';

function productExceptSelf(nums: number[]): number[] {

	const answer = new Array<number>(nums.length);
	let product = 1;
	for(let i = 0; i < nums.length; i++) {
		product*=nums[i];
		answer[i] = product;
	}
	product = 1;
	for(let i = nums.length - 1; i>=0; i--) {
		if(i + 1 >= nums.length) {
			answer[i] = answer[i-1];
		} else if (i === 0) {
			answer[i] = product;	
		}else {
			answer[i] = answer[i-1]*product;
		}
		product*=nums[i];
	}

	return answer;
};

describe('Product Array Except self', () => {
	it('[1,2,3,4] ===> [24,12,8,6]', () => {
		const result = productExceptSelf([1,2,3,4]);
		assert.deepEqual(result, [24,12,8,6]);
	});

	it('[-1,1,0,-3,3] ===> [0,0,9,0,0]', () => {
		const result = productExceptSelf([1,2,3,4]);
		assert.deepEqual(result, [24,12,8,6]);
	});
});