import {assert} from 'chai';


function kClosest(points: number[][], k: number): number[][] {
	const result: number[][] = [];
	const distanceMap = new Map<number, number>();
	points
	.forEach( (point, index) => { 
		distanceMap.set(index , Math.sqrt( point[0] * point[0] + point[1] * point[1] ));
	});

	const sortedDistance: number[] =  [];
	distanceMap.forEach((value, key) => {
		sortedDistance.push(key);
	});
	sortedDistance.sort((a, b) => {
		const valA = distanceMap.get(a) || 0;
		const valB = distanceMap.get(b) || 0;
		if(valA !== valB) {
			return valA - valB;
		}
		return a - b;
	})
	
	for(let i = 0; i < k; i++) {
		result.push(points[sortedDistance[i]]);
	}
	return result;
};

describe('K Closest Points to Origin', () => {
	it('points = [[1,3],[-2,2]], k = 1 ===> [[-2,2]]', () => {
		const result = kClosest([[1,3],[-2,2]], 1);
		assert.deepEqual(result, [[-2,2]]);
	});

	it('points = [[3,3],[5,-1],[-2,4]], k = 2 ===> [[3,3],[-2,4]]', () => {
		const result = kClosest([[3,3],[5,-1],[-2,4]], 2);
		assert.deepEqual(result, [[3,3],[-2,4]]);
	});
})