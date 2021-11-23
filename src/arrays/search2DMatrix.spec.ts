import {expect} from 'chai';
import { binarySearch } from './binarySearch.spec';

function searchMatrix(matrix: number[][], target: number): boolean {
	if(!matrix || matrix.length === 0) {
		return false;
	}
	const m = matrix.length;
	const n = matrix[0].length;
	for(let r= 0; r < m; r++) {
		if(target >  matrix[r][n-1]) {
			continue;
		}
		return binarySearch(matrix[r], target) !== -1;
	}	
	return false;
}

function searchMatrix2(matrix: number[][], target: number): boolean {
	if(!matrix || matrix.length === 0) {
		return false;
	}
	const m = matrix.length;
	const n = matrix[0].length;
	for(let r= 0; r < m; r++) {
		if(binarySearch(matrix[r], target) !== -1) {
			return true;
		}
	}

	return false;
}


describe('Search 2D matrix', () => {
	it('matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3 ==> true', () => {
		expect(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3)).to.equal(true);
	});
})
