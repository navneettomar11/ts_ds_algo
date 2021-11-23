import {assert} from 'chai';


function canJump(nums: number[]): boolean {
	if(!nums || nums.length === 0) {
		return false;
	}
	let lastJump = nums.length - 1;
	for(let i = lastJump; i>=0; i--) {
		if(i + nums[i] >= lastJump) {
			lastJump = i;
		}
	}
	return lastJump === 0;
};

function jump(nums: number[]): number {
	const dp = [];
	dp[0] = 0;
	for(let i = 1; i < nums.length; i++) {
		dp[i] = Number.MAX_VALUE;
	}
	for(let start = 0; start < nums.length - 1; start++) {
		for(let end = start + 1; end <= start + nums[start] && end < nums.length; end++) {
			dp[end] = Math.min(dp[end], dp[start] + 1)
		}
	}
 	return dp[nums.length - 1];
};


describe('Jump Game', () => {
	it('nums = [2,3,1,1,4] ===> true', () => {
		assert.isTrue(canJump([2,3,1,1,4]));
	});
	it('[1] ===> 0', ()=>{
		const result = jump([1]);
		assert.equal(result, 0);
	})
});