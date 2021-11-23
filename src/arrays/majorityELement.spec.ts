import {expect} from 'chai';

function  majorityElement(nums: number[]): number {

	if(!nums || nums.length === 0) {
		return -1;
	}

	if(nums.length === 1) {
		return nums[0];
	}

	let candidate: number = 0;
	let count = 0;
	nums.forEach(num =>{
		if(count === 0) {
			candidate = num;
		}
		count+= (num === candidate) ? 1 : -1;
	});

	return candidate;
}


describe('Majority Element', () => {
	it('[3,2,3] ==> 3', () => {
		const result = majorityElement([3,2,3]);
		expect(result).to.equal(3);
	});

	it('[2,2,1,1,1,2,2] ==> 2', () => {
		const result = majorityElement([2,2,1,1,1,2,2]);
		expect(result).to.equal(2);
	});
})