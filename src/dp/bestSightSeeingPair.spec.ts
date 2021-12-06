import {assert} from 'chai';

function maxScoreSightseeingPair(values: number[]): number {
	if(!values || !values.length) {
		return 0;
	}
	let max = values[0]; //values[0] + 0
	let ans = -1;
	for(let i = 1; i < values.length; i++) {
		ans = Math.max(ans, max + values[i] - i);
		max = Math.max(max, values[i] + i);
	}
	return ans;
};

describe('Best SightSeeing Pair', () => {
	it('values = [8,1,5,2,6] ===> 11', () => {
		assert.equal(maxScoreSightseeingPair([8,1,5,2,6]), 11);
	})
});