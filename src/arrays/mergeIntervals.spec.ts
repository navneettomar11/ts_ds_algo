import {expect} from 'chai';

function merge(intervals: number[][]): number[][] {
	const result: number[][] = [];
	intervals.sort((i, j ) => {
		if(i[0] === j[0]) {
			return i[1] - j[1];
		}
		return i[0] - j[0];
	});
	let l = intervals[0][0];
	let h = intervals[0][1];

	for(let i = 1; i < intervals.length; i++) {
		const next = intervals[i];
		if(next[1] >= l && next[0] <= h) {
			h = Math.max(next[1], h);
		} else {
			result.push([l, h]);
			l = next[0];
			h = next[1];
		}
	}
	result.push([l, h]);
	return result;
};

describe('merge intervals', () => {
	it('[[1,3],[2,6],[8,10],[15,18]] ===> [[1,6],[8,10],[15,18]]', () => {
		const result = merge([[1,3],[2,6],[8,10],[15,18]]);
		expect(result).to.deep.equal([[1,6],[8,10],[15,18]]);
	});
});