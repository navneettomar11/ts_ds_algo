import {assert} from 'chai';


function lengthOfLIS(nums: number[]): number {
	const dp = [];
	dp[0] = 1;
	let maxLength = 1;

	for (let i=1; i<nums.length; i++) {
    	dp[i] = 1;
    	for (let j=0; j<i; j++){
        	if (nums[i] > nums[j] && dp[i] <= dp[j] ) {
            	dp[i] = dp[j]+1;
				maxLength = Math.max(maxLength, dp[i]);
			}
        }
    }
    return maxLength;
}

function findNumberOfLIS(nums: number[]): number {
	const result: number[][] = [];
	findNumberOfLISHelper(nums, -1, 0, [], result);
	console.log('Final Result', result);
	return result.length;
};

function findNumberOfLISHelper(nums: number[], prevIdx: number, currIdx: number, 
	set: number[], result: number[][]) {

	if(currIdx === nums.length - 1) {
		result.push([...set]);
		return;
	}	
	if(prevIdx === -1 || nums[prevIdx] <= nums[currIdx]) {
		console.log('Nums ==> ', nums[currIdx]);
		set.push(nums[currIdx]);
		findNumberOfLISHelper(nums, currIdx, currIdx + 1, set, result);
	}
	findNumberOfLISHelper(nums, prevIdx, currIdx + 1, [], result);
}

describe('Longest Increasing Subsequence', () => {
	it('nums = [10,9,2,5,3,7,101,18] ===> 4', () => {
		const result = lengthOfLIS([10,9,2,5,3,7,101,18]);
		assert.equal(result, 4);
	})
});