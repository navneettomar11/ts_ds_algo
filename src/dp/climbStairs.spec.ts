import {assert} from 'chai';

function climbStairs(n: number): number {
	
	const dp: number[] = new Array<number>(n + 1).fill(1);
	for(let i = 2; i <=n; i++) {
		dp[i] = dp[i-1] + dp[i-2];
	}

	return dp[n];
};

function minCostClimbingStairs(cost: number[]): number {
	const n = cost.length;
	const dp = new Array<number>(n + 1).fill(0);
	dp[0] = cost[0];
	if(n > 1) {
		dp[1] = cost[1];
	}
	for(let i = 2; i <=n; i++) {
		dp[i] = Math.min(dp[i-1], dp[i-2]) + cost[i];
	}
	return Math.min(dp[n-1], dp[n-2]);
};

describe('Climb Stairs' ,() =>{
	describe('Distanct ways to climb stairs', () => {
		it('n = 2 ===> 2', () => {
			const result  = climbStairs(2);
			assert.equal(result, 2);
		});

		it('n = 5 ===> 8', () => {
			const result  = climbStairs(5);
			assert.equal(result, 8);
		});
	});

	describe('Min cost stairs', () => {
		it('cost = [10,15,20] ===> 15', () => {
			const result = minCostClimbingStairs([10,15,20]);
			assert.equal(result, 15);
		});
		it('cost = [1,100,1,1,1,100,1,1,100,1] ===> 6', () => {
			const result = minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1]);
			assert.equal(result, 6);
		});
	})
})