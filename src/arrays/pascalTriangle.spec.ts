import {expect} from 'chai';
import { transcode } from 'buffer';
import { AssertionError } from 'assert';

function getRow(rowIndex: number): number[] {

	let triangle: number[][] = [];
	triangle[0]= [1];
	for(let r = 1; r <= rowIndex; r++) {
		triangle[r] = [];
		for(let c = 0; c <= r; c++) {
			if(!triangle[r][c]) {
				triangle[r].push(0);
			}
			triangle[r][c]+= triangle[r-1][c] || 0;
			if(c > 0) {
				triangle[r][c]+=triangle[r-1][c-1];
			} 
		}
	}
	return triangle[rowIndex];
};

function generate(numRows: number): number[][] {
	let triangle: number[][] = [];
	triangle[0]= [1];
	for(let r = 1; r < numRows; r++) {
		triangle[r] = [];
		for(let c = 0; c <= r; c++) {
			if(!triangle[r][c]) {
				triangle[r].push(0);
			}
			triangle[r][c]+= triangle[r-1][c] || 0;
			if(c > 0) {
				triangle[r][c]+=triangle[r-1][c-1];
			} 
		}
	}
	return triangle;
};

describe('Pascal Triangle ', () => {
	it('rowIndex = 3 ===> [1,3,3,1]', () => {
		const result = getRow(3);
		expect(result).to.deep.equal([1,3,3,1]);
	});
	it('rowIndex = 0  ===> [1]', () => {
		const result = getRow(0);
		expect(result).to.deep.equal([1]);
	});
	it('rowIndex = 1  ===> [1,1]', () => {
		const result = getRow(1);
		expect(result).to.deep.equal([1,1]);
	});

	it('numOfRows = 5 ===> [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]', () =>{
		expect(generate(5)).deep.equal([[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]);
	})
});