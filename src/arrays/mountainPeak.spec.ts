import {expect} from 'chai';

function peakOfMountain(arr: number[]): number {

	let low = 0;
	let high = arr.length - 1;
	let boundaryIndex = -1;
	while(low <= high) {
		const mid = low + Math.trunc((high - low )/2);
		if (mid === arr.length - 1 || arr[mid] >= arr[mid + 1]) {
            boundaryIndex = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
	}
	return boundaryIndex;
}

describe('peak of mountain array', () => {
	it('[0,1,2,3,2,1,0] => 3', ()=> {
		const result = peakOfMountain([0,1,2,3,2,1,0]);
		expect(result).to.equal(3);
	});
})