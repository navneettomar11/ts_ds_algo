import {expect} from 'chai';

function generateMatrix(n: number): number[][] {
	const result: number[][] = [];

	for(let i = 0; i < n; i++) {
		result.push(new Array(n).fill(0));
	}

	let top = 0;
	let bottom = n-1;
	let left = 0;
	let right = n -1;
	let direction = 0;
	let count = 1;
	let row = 0;
	while(top <= bottom && left <= right) {
		if(direction === 0) { //left to right
			for(let i = left; i <= right; i++) {
				result[top][i] = count++;
			}
			top+=1;
		} else if(direction === 1) { // top to down
			for(let i = top; i<=bottom; i++) {
				result[i][right] = count++;
			}
			right-=1;
			row++;
		} else if(direction === 2) { // right to left
			for(let i = right; i>=left; i--) {
				result[bottom][i] = count++;
			}
			bottom-=1;
		} else if(direction === 3) { //bottom to top;
			for(let i=bottom; i >= top; i--) {
				result[i][left] = count++;
			}
			left+=1;
		}
		direction = Math.trunc((direction + 1) % 4);
	}
	return result;
};

describe('Spiral Matrix', () => {
	it('n = 3 ===> [[1,2,3],[8,9,4],[7,6,5]]', () =>{
		const result = generateMatrix(3);
		expect(result).to.deep.equal([[1,2,3],[8,9,4],[7,6,5]]);
	});
})