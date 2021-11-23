import {expect} from 'chai';
import { transcode } from 'buffer';

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
	})
});