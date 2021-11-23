import {expect} from 'chai';

function singleNumber(nums: number[]): number {

	if(!nums || nums.length === 0) {
		return -1;
	}
	if(nums.length === 1) {
		return nums[0];
	}

	let sn = nums[0];
	for(let i = 1; i < nums.length; i++) {
		sn = sn ^ nums[i];
	}

	return sn;

}


describe('Single number frequency', () => {
	it('[2,2,1] ==> 1', () => {
		const result = singleNumber([2,2,1]);
		expect(result).to.equal(1);
	});
})