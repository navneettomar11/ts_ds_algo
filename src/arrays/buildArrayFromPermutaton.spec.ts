import {expect} from 'chai';

function buildArray(nums: number[]): number[] {
	const ans : number[] = [];
	for(let i = 0; i < nums.length; i++) {
		ans[i] = nums[nums[i]];
	}
	return ans;
}

function buildArray2(nums: number[]): number[] {
	return nums.map(num => nums[num]);
}

describe('build array from permuations', () => {
	it('test case 01', () =>{
		const result = buildArray2([0,2,1,5,3,4]);
		expect(result).to.deep.equal([0,1,2,4,5,3]);
	});

	it('test case 02', () =>{
		const result = buildArray2([5,0,1,2,3,4]);
		expect(result).to.deep.equal([4,5,0,1,2,3]);
	});
})