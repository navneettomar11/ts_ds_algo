import {expect} from 'chai';

function firstNotSmaller(arr: number[], target: number): number {

	let low = 0;
	let high = arr.length - 1;
	let boundaryIndex = -1;
	while(low <= high) {
		const mid = Math.trunc((low + high)/2);
		if(arr[mid] >= target) {
			boundaryIndex = mid;
			high = mid - 1;
		} else {
			low = mid + 1;	
		}
	}
	return boundaryIndex;
}

describe('find element not smaller than target', () => {
	it('test case 01', () => {
		const result = firstNotSmaller([1, 3, 3, 5, 8, 8, 10], 2);
		expect(result).to.equal(1)
	});

	it('test case 02', () => {
		const result = firstNotSmaller([1, 3, 3, 5, 8, 8, 10], 20);
		expect(result).to.equal(-1)
	});
})