import {expect} from 'chai';

function threeSum(nums: number[]): number[][] {
	if(!nums || nums.length < 3) {
		return [];
	}
	nums.sort((a, b) => a - b);
	const len = nums.length;
	const result: number[][] = [];
	for(let i = 0; i < len - 2; i++) {

		if(i > 0 && nums[i] === nums[i-1]) {
			continue;
		}
		let j = i + 1;
		let k = len - 1;
		let target = - nums[i];
		while (j < k) {
			const current = nums[j] + nums[k];
			if(current < target) {
				j++;
			} else if(current > target) {
				k--;
			} else {
				result.push([nums[i], nums[j], nums[k]]);
				j++;
				while(j<k && nums[j]==nums[j-1]) j++;
				while(j<k && nums[k]==nums[k-1]) k--;
			}
		}
	}
	return result;
};

describe('Three Sum ', () => {
	it('[-1,0,1,2,-1,-4] ==> [[-1,-1,2],[-1,0,1]]', () => {
		const result = threeSum([-1,0,1,2,-1,-4]);
		expect(result).to.deep.equal([[-1,-1,2],[-1,0,1]]);
	});
	it('[] ==> []', () => {
		const result = threeSum([]);
		expect(result).to.deep.equal([]);
	});
	it('[0] ==> []', () => {
		const result = threeSum([]);
		expect(result).to.deep.equal([]);
	});
	it('[-1,0,1,2,-1,-4,-2,-3,3,0,4] ==> [[-4,0,4],[-4,1,3],[-3,-1,4],[-3,0,3],[-3,1,2],[-2,-1,3],[-2,0,2],[-1,-1,2],[-1,0,1]]', () => {
		const result = threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4]);
		expect(result).to.deep.equal([[-4,0,4],[-4,1,3],[-3,-1,4],[-3,0,3],[-3,1,2],[-2,-1,3],[-2,0,2],[-1,-1,2],[-1,0,1]]);
	})
});