import {assert} from 'chai';

function maxProduct(nums: number[]): number {
	if(!nums || !nums.length) {
		return 0;
	}

	let localMax = nums[0];
	let localMin = nums[0];
	let globalMax = nums[0];
	for(let i = 1; i < nums.length; i++) {
		console.log('Local ', localMax, localMin);
		const tempMax = nums[i] * localMax;
		const tempMin = nums[i] * localMin;
		localMax = Math.max(nums[i], tempMax, tempMin);
		localMin = Math.min(nums[i], tempMax, tempMin);
		console.log('Temp max ', tempMax, ' min ', tempMin, ' Nums[i]', nums[i]);	
		globalMax = Math.max(localMax, globalMax);
	}
	return globalMax;
};

describe('Max product subarray ', () => {
	it('nums = [2,3,-2,4] ===> 6',() => {
		assert.equal(maxProduct([2,3,-2,4]), 6);
	});

	it('nums = [-2,0,-1] ===> 0',() => {
		assert.equal(maxProduct([-2,0,-1]), 0);
	});
	it('nums = [-2,3,-4] ===> 24', () => {
		assert.equal(maxProduct([-2,3,-4]), 24);
	})
});