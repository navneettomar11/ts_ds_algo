import {assert} from 'chai';

function numberOfWaysToMakeChange(n: number, denoms: number[]) {
	const ways: number[] = new Array<number>(n + 1).fill(0);
	ways[0] = 1;
	for(let denom of denoms) {
		for(let amount = 1; amount < n + 1; amount++) {
			if(denom <= amount) {
				ways[amount] += ways[amount - denom];
			}
		}
	}
	return ways[n];
}

function numberOfWaysToMakeChangeHelper(n: number, denoms: number[], current: number): number {
	if(n === 0) {
		return 1;
	}
	if(current >= denoms.length) {
		return 0;
	}
	let countOne = 0;
	if(denoms[current] <= n) {
		countOne = numberOfWaysToMakeChangeHelper(n - denoms[current], denoms, current);
	}
	let countTwo = numberOfWaysToMakeChangeHelper(n, denoms, current + 1);

	return countOne + countTwo;
}



describe('Number of ways to make changes', () => {
	it('n=6, denoms = [1,5] ===> 2', () => {
		assert.equal(numberOfWaysToMakeChange(6, [1,5]), 2);
	});

	it('n=7, denoms = [2,4] ===> 0', () => {
		assert.equal(numberOfWaysToMakeChange(7, [2,4]), 0);
	});
})