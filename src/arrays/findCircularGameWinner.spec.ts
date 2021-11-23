import {assert} from 'chai';

function findTheWinner(n: number, k: number): number {
	const players = [];
	for(let i = 1; i <= n; i++) {
		players.push(i);
	}
	let removeIdx = 0;
	while(n !== 1) {
		removeIdx = removeIdx + k -1;
		if(removeIdx >= n) {
			removeIdx = removeIdx % n;
		} 
		players.splice(removeIdx, 1);
		n = n - 1;
	}

	return players[0];
};

describe('Find the Winner of the Circular Game', () => {
	it('n = 6, k= 6 ===> 1', () => {
		const result = findTheWinner(6,5);
		assert.equal(result, 1);
	});
	it('n = 5, k= 2 ===> 3', () => {
		const result = findTheWinner(6,5);
		assert.equal(result, 1);
	})
})