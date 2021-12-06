import {assert} from 'chai';

function minNumberOfCoinsForChange(n: number, denoms: number[]) {
	const numOfCoins = new Array<number>(n + 1).fill(Infinity);

	numOfCoins[0] = 0;
	for(let denom of denoms) {
		for(let amount = 0; amount < numOfCoins.length; amount++) {
			if(denom <= amount) {
				numOfCoins[amount] = Math.min(numOfCoins[amount], numOfCoins[amount - denom] + 1);
			}
		}
	}
	return numOfCoins[n] !== Infinity ? numOfCoins[n] : -1;
}


describe('Min Number of Coins For Change', () => {
	it('n = 7,  denoms: [1, 5, 10] ===> 3', () => {
		assert.equal(minNumberOfCoinsForChange(7, [1,5,10]), 3);
	})
})