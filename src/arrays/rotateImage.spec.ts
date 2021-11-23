import {expect} from 'chai';

function rotate(matrix: number[][]): void {

	if(!matrix || matrix.length === 0 || matrix[0].length === 0) {
		return;
	}
	const m = matrix.length;
	const n = matrix[0].length;

	for(let i = 0; i < Math.trunc((n+1)/2); i++) {
		for(let j = 0; j < Math.trunc(n/2); j++) {
			const temp = matrix[m - 1-j][i];
			matrix[m-1-j][i]  = matrix[m-1-i][m-1-j];
			matrix[m-1-i][m-1-j] = matrix[j][m - 1 -i];
			matrix[j][m - 1 - i] = matrix[i][j];
			matrix[i][j] = temp;
		}
	}
	
};


describe('rotate image ', () => {
	it('[[1,2,3],[4,5,6],[7,8,9]] ===> [[1,2,3],[4,5,6],[7,8,9]]', () => {
		const matrix = [[1,2,3],[4,5,6],[7,8,9]];
		rotate(matrix);
		expect(matrix).to.deep.equal([[7,4,1],[8,5,2],[9,6,3]]);
	})
})