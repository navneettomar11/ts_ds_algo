import { expect } from 'chai';

function twoSum(nums: number[], target: number): number[] {
	const map = new Map<number, number>();
	const result: number[] = [];

	for(let idx = 0; idx < nums.length; idx++) {
		if(map.has(nums[idx])) {
			result.push(map.get(nums[idx]) as number);
			result.push(idx);
			break;
		}
		map.set(target - nums[idx], idx);
	}
	return result;
};

describe('Two Sum', () => {
	it('exactly one solution', ()=> {
		const result = twoSum([2,7,11,15], 9);
		expect(result).to.deep.equal([0,1]);
	});
})