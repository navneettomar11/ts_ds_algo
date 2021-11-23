import {assert} from 'chai';

function rob(nums: number[]): number {
	if(nums.length === 1) return nums[0];
	if(nums.length === 2) return Math.max(nums[0], nums[1]);
	return Math.max(robHelper(nums, nums.length - 2), robHelper(nums, nums.length - 1));

}

function robHelper(nums: number[], end: number): number {
	if(end === nums.length - 1) {
		nums[0] = 0;
	}
	const dp = new Array<number>(nums.length + 2);
	dp.fill(0);
	
	for(let i = end; i>=0; i--) {
		//console.log('I', i, ' DP2 ',dp[i+2], 'DP1 ', dp[i+1],'Nums ', nums[i]);
		dp[i] = Math.max(nums[i] + dp[i+2], dp[i+1]);
		//console.log('DP ', dp);
	}
	return dp[0];
}

describe('House Robber II', () => {
	it('nums = [2,3,2] ===> 3', () => {
		const result = rob([2,3,2]);
		assert.equal(result, 3);
	});
});