import {assert} from 'chai';

function intervalIntersection(firstList: number[][], secondList: number[][]): number[][] {
	const result: number[][] = [];
	let i = 0;
	let j = 0;

	while(i < firstList.length && j < secondList.length) {
		let low = Math.max(firstList[i][0], secondList[j][0]);
		let high = Math.min(firstList[i][1], secondList[j][1]);
		if( low <= high) {
			result.push([low, high]);
		}
		if(firstList[i][1] < secondList[j][1]) {
			i++;
		} else {
			j++;
		}
	}
	return result;
};

describe('Interval List Intersections', () => {
	it(`firstList = [[0,2],[5,10],[13,23],[24,25]], 
	secondList = [[1,5],[8,12],[15,24],[25,26]] ===> 
	[[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]`, () => {
		const result = intervalIntersection([[0,2],[5,10],[13,23],[24,25]], [[1,5],[8,12],[15,24],[25,26]]);
		assert.deepEqual(result, [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]);
	});
})