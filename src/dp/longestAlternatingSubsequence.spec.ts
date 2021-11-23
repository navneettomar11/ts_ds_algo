import {assert} from 'chai';

function findLASLength(nums: number[]): number {
	return Math.max(findLASLengthHelper(nums, 0, -1, true), findLASLengthHelper(nums, 0, -1, false) );
}

function findLASLengthHelper(nums: number[], current: number, prev: number, asc: boolean) : number {
	if(current >= nums.length) {
		return 0;
	}
	let countOne = 0;
	if(prev === -1 || (asc && nums[prev] < nums[current]) || (!asc && nums[prev] > nums[current])) {
		countOne = 1 + findLASLengthHelper(nums, current + 1, current, !asc);
	}
	let countTwo = findLASLengthHelper(nums, current + 1, prev, asc);
	
	return Math.max(countOne, countTwo);
}


function findLASLengthMemo(nums: number[]): number {
	const memo: number[][][] = [];
	return Math.max(findLASLengthMemoHelper(memo, nums, 0, -1, true), findLASLengthMemoHelper(memo, nums, 0, -1, false) );
}

function findLASLengthMemoHelper(memo: number[][][] , nums: number[], current: number, prev: number, asc: boolean): number {
	if(current >= nums.length) {
		return 0;
	}
	memo[prev + 1] = memo[prev+1] || [];
	memo[prev + 1][current] = memo[prev + 1][current] || [];

	if(memo[prev + 1][current][asc ? 1: 0] === undefined) {
		let countOne = 0;
		if(asc) {
			if(prev === -1 || nums[prev] < nums[current]) {
				countOne = 1 + findLASLengthMemoHelper(memo, nums, current + 1, current, !asc);
			}
		} else {
			if(prev === -1 || nums[prev] > nums[current]) {
				countOne = 1 + findLASLengthMemoHelper(memo, nums, current + 1, current, !asc);
			}
		}
		let countTwo = findLASLengthMemoHelper(memo, nums, current + 1, prev, asc);

		memo[prev+1][current][asc ? 1: 0] = Math.max(countOne, countTwo);
	}
	return memo[prev+1][current][asc ? 1: 0];
}

function findLASLengthBottom(nums: number[]): number {
	const dp: number[][] = new Array<Array<number>>(nums.length).fill(new Array<number>(2).fill(1));
	let maxLength = 0;
	for(let i = 0; i < nums.length; i++) {
		for(let j = 0; j < i; j++) {
			if(nums[i] > nums[j]) {
				dp[i][1] = Math.max(dp[i][0], 1 + dp[j][0]);
				maxLength = Math.max(maxLength, dp[i][1]);
			} else if(nums[i] !== nums[j]) {
				dp[i][0] = Math.max(dp[i][0], 1 + dp[j][1]);
				maxLength = Math.max(maxLength, dp[i][0]);
			}
		}
	}
	return maxLength;
}

describe('Longest Alternating Subsequence ', () => {
	it('array = [1,2,3,4] ===> 2', () => {
		assert.equal(findLASLength([1,2,3,4]), 2);
	});
	it('array = [1,2,3,4] ===> 2', () => {
		assert.equal(findLASLengthMemo([1,2,3,4]), 2);
	})
	it('array = [1,2,3,4] ===> 2', () => {
		assert.equal(findLASLengthBottom([1,2,3,4]), 2);
	})
})