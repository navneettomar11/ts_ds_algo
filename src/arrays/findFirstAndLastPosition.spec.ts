import {expect} from 'chai';
import {binarySearch} from './binarySearch.spec';

function searchRange(nums: number[], target: number): number[] {
	const result = [-1,-1];
	if(nums.length === 0) {
		return result;
	}
	const idx = binarySearch(nums, target);
	const n = nums.length;
	if(idx >= 0) {
		let firstIdx, lastIdx;
		firstIdx = lastIdx = idx;
		while(firstIdx >= 0 && nums[firstIdx] === target) firstIdx--;
		while(lastIdx < n && nums[lastIdx] === target) lastIdx++;
		result[0] = firstIdx + 1;
		result[1] = lastIdx - 1;
	}	
	return result;
}


describe('find first and last postion in sorted array', () => {
	it('nums = [5,7,7,8,8,10], target = 8 ==> [3,4]', () => {
		const result = searchRange([5,7,7,8,8,10], 8);
		expect(result).to.deep.equal([3,4]);
	});
	it('nums = [5,7,7,8,8,10], target = 6 ==> [-1,-1]', () => {
		const result = searchRange([5,7,7,8,8,10], 6);
		expect(result).to.deep.equal([-1,-1]);
	});
	it('nums = [], target = 0 ==> [-1,-1]', () => {
		const result = searchRange([], 0);
		expect(result).to.deep.equal([-1,-1]);
	})
})

