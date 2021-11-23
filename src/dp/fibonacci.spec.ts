import {assert} from 'chai';

function fib(n: number): number {
	const dp: number[] = (new Array<number>(n+1)).fill(0);
	dp[0] = 0;
	dp[1] = 1;
	for(let i = 2; i <=n; i++) {
		dp[i] = dp[i-2] + dp[i-1];
	}

	return dp[n];
};

function tribonacci(n: number): number {
	const dp: number[] = (new Array<number>(n + 1)).fill(0);
	dp[0] = 0;
	dp[1] = 1;
	dp[2] = 1;
	for(let  i = 3; i<=n; i++) {
		dp[i] = dp[i-1] + dp[i-2] + dp[i-3];
	}

	return dp[n];
 };

describe('Fibonacci Number ', () => {
	it('n = 2 ===> 1', () => {
		const result = fib(2);
		assert.equal(result, 1);
	});
	it('n = 3 ===> 2', () => {
		const result = fib(3);
		assert.equal(result, 2);
	});
});

describe('N-th Tribonacci Number', () => {
	it('n = 4 ===> 4', () =>{
		const result = tribonacci(4);
		assert.equal(result, 4);
	})
});