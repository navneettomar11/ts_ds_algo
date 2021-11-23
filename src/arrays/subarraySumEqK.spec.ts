import {expect} from 'chai';

function subarraySum(nums: number[], k: number): number {
	const countMap = new Map<number, number>();
	let count = 0;
	let sum = 0;
	countMap.set(0,1);
	for(let i = 0; i < nums.length; i++) {
		sum+=nums[i];
		if(countMap.has(sum - k)) {
			 count+= countMap.get(sum - k) || 0;
		}
		const sumCount = countMap.get(sum) || 0;
		countMap.set(sum, sumCount + 1);
	}
	return count;
};


describe('Subarray Sum equals K', () => {
	it('nums = [1,1,1], k = 2 ===> 2', () => {
		const result = subarraySum([1,1,1], 2);
		expect(result).to.equal(2);
	});
})