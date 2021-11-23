import {expect} from 'chai';

function sortColors(nums: number[]): void {
	if(!nums || nums.length === 0) {
		return;
	}

	let len = nums.length;
	let count: number[] = [];
	let max = nums[0];
	for(let i = 1; i < len; i++) {
		max = Math.max(nums[i], max);
	}

	for(let i = 0; i <= max; i++) {
		count[i] = 0;
	}

	for(let i = 0 ; i< len; i++) {
		count[nums[i]]++;
	}

	//Store the cummulative count of each array
	for(let i  = 1; i <=max; i++) {
		count[i]+= count[i-1]; 
	}

	// Find the index of each element of the original array in count array, and
	// place the elements in output array
	const output: number[] = [];
	for(let i = len -1 ; i >= 0; i--) {
		output[count[nums[i]] - 1] = nums[i];
		count[nums[i]]--;
	}

	// Copy the sorted elements into original array
	for (let i = 0; i < len; i++) {
		nums[i] = output[i];
	}
};

describe('Sort color', () => {
	it('[2,0,2,1,1,0] ==> [0,0,1,1,2,2]', () => {
		const nums = [2,0,2,1,1,0];
		sortColors(nums);
		expect(nums).to.deep.equals([0,0,1,1,2,2]);
	});
	it('[2,0] ==> [0,2]', () => {
		const nums = [2,0];
		sortColors(nums);
		expect(nums).to.deep.equals([0,2]);
	});
});