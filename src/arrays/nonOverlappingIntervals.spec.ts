import {expect} from 'chai';

function eraseOverlapIntervals(intervals: number[][]): number {

	if(!intervals || intervals.length <= 1 ) {
		return 0;
	}
	intervals.sort( (i , j ) => {
		if(i[0] === j[0]) {
			return i[1] - j[1];
		}
		return i[0] - j[0];
	});
	let end = intervals[0][1];
	let count = 0;
	for(let i = 1; i < intervals.length; i++) {
		if(intervals[i][0] < end) {
			count++;
			end = Math.min(end, intervals[i][1]);
		} else {
			 end = intervals[i][1];
		}
	}
	return count;
};

describe('Non Overlapping Intervals', () => {
	it('[1,2],[2,3],[3,4],[1,3]] ===> 1', () => {
		const result = eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]]);
		expect(result).to.equal(1);
	});
	it('[[1,2],[1,2],[1,2]] ===> 2', () => {
		const result = eraseOverlapIntervals([[1,2],[1,2],[1,2]]);
		expect(result).to.equal(2);
	})
})