import {expect} from 'chai';
import { binarySearch } from './binarySearch.spec';

function search(nums: number[], target: number): number {
	if(!nums || nums.length === 0) {
		return -1;
	}
	const len = nums.length;
	let l = 0;
	let r = len - 1;
	while(l <= r) {
		const m = l + Math.trunc((r-l)/2);
		if(nums[m] === target) {
			return m;
		} else if(target > nums[m]) {
			if(nums[r] < target && nums[m] <= nums[r]) {
				 r = m  -1;
			} else {
				l = m + 1;
			}
		} else if (target < nums[m]) {
			if(nums[l] > target && nums[m] >= nums[l]) {
				l = m + 1;
			} else {
				r = m - 1;
			}
		}
	}
	return -1;
}


describe('Search in rotated sorted array', () => {
	it('Input: nums = [4,5,6,7,0,1,2], target = 0 ==> 4', () => {
		const result = search([4,5,6,7,0,1,2], 0);
		expect(result).to.equal(4);
	});

	it('Input: nums = [4,5,6,7,0,1,2], target = 5 ==> 1', () => {
		const result = search([4,5,6,7,0,1,2], 5);
		expect(result).to.equal(1);
	});

	it('Input: nums = [4,5,6,7,0,1,2], target = 3 ==> -1', () => {
		const result = search([4,5,6,7,0,1,2], 3);
		expect(result).to.equal(-1);
	});
})