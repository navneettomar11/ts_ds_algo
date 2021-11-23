import {expect} from 'chai';

function findBoundary(arr: boolean[]): number {
	if (!arr || arr.length == 0) {
		return -1;
	}
	let low = 0;
	let high = arr.length-1;
	let boudaryIndex = -1;
	while(low <= high) {

		const mid = Math.trunc((low + high)/2);
		if(arr[mid]) {
			boudaryIndex = mid;
			high = mid - 1;
		} else {
			low = mid + 1;
		} 
	}
	return boudaryIndex;
}

describe('find boundaries', () => {
	it('test case 01', () => {
		const result = findBoundary([false, false, true, true, true]);
		expect(result).to.equal(2);
	})
})