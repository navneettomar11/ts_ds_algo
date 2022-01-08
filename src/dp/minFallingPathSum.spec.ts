import {assert} from 'chai';

function minFallingPathSum(matrix: number[][]): number {
	if( matrix.length === 0) {
		return 0;
	}
	if(matrix.length > 0 && matrix[0].length === 0) {
		return 0;
	}

	const m = matrix.length;
	const n = matrix[0].length;

	for(let r = m-1; r>0; r--) {
		for(let c = 0; c < n; c++) {
			let minElem = matrix[r][c];
			if(c > 0) {
				minElem = Math.min(matrix[r][c-1], minElem);
			}
			if(c < n-1) {
				minElem = Math.min(matrix[r][c+1], minElem);
			}
			matrix[r-1][c]+=minElem;
		}
	}

	let min = Number.MAX_VALUE;
	for(let i = 0; i < n; i++) {
		min = Math.min(matrix[0][i], min);
	}

	return min;
};


describe('Minimum Falling Path sum', () => {
	it('matrix = [[2,1,3],[6,5,4],[7,8,9]] ===> 13', () => {
		assert.equal(minFallingPathSum([[2,1,3],[6,5,4],[7,8,9]]), 13);
	})
})