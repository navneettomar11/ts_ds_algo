import {assert} from 'chai';

function trap(height: number[]): number {
	const n = height.length;
	const leftWalls = new Array<number>(n).fill(0);
	const rightWalls = new Array<number>(n).fill(0);

	let maxLeftWall =  0;
	for(let i = 0; i < n; i++) {
		leftWalls[i] = maxLeftWall;
		maxLeftWall = Math.max(maxLeftWall, height[i]);
	}

	let maxRightWall = 0;
	for(let i = n-1; i >=0; i--) {
		rightWalls[i] = maxRightWall;
		maxRightWall = Math.max(maxRightWall, height[i]);
	}
	let totalWater = 0;
	for(let i = 0; i < n; i++) {
		const elevation = height[i]
		const lowestWall = Math.min(leftWalls[i], rightWalls[i]);
		if(lowestWall > elevation) {
			totalWater+=lowestWall - elevation;
		}
	}
	return totalWater;
};

describe('Trapping Rain water', () => {
	it('height = [0,1,0,2,1,0,1,3,2,1,2,1] ===> 6', () => {
		assert.equal(trap([0,1,0,2,1,0,1,3,2,1,2,1]), 6);
	});
	it('height = [4,2,0,3,2,5] ===> 9', () => {
		assert.equal(trap([4,2,0,3,2,5]), 9);
	});
})