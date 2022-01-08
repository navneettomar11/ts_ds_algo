import {assert} from 'chai';

function numTrees(n: number): number {
	if(n < 0) {
		return 0;
	}

	const dp = new Array(n+1).fill(0);
	dp[0] = dp[1] = 1;
	const iter = (n: number) => {
		if(!dp[n]) {
			for(let i = 1; i <= n; i++) {
				dp[n] += iter(i-1) * iter(n-i);
			}
		}
		return dp[n];
	}

	iter(n);	

	return dp[n];
};


describe('Number of Unique Binary Search Tree', () => {
	it(' n = 3 ===> 5', () => {
		assert.equal(numTrees(3), 5);
	});
	it(' n = 1 ===> 1', () => {
		assert.equal(numTrees(1), 1);
	});
});