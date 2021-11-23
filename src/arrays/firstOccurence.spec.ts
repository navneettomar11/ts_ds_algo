import {expect} from 'chai';

function findFirstOccurence(arr: number[], target: number): number {
	
	let low = 0;
	let high = (arr.length - 1);
	let firstOccurenceIndex = -1;
	while(low <= high) {
		const mid = low + Math.trunc((high - low)/2);
		if(arr[mid] == target) {
			firstOccurenceIndex = mid;
			high = mid - 1;
		}  else if(arr[mid] > target) {
			high = mid - 1;
		}else {
			low = mid + 1;
		}
	}
	return firstOccurenceIndex;
}

describe('Find first Occurence given target', () => {
	it('target exists', () => {
		const result = findFirstOccurence([1, 3, 3, 3, 3, 6, 10, 10, 10, 100], 3);
		expect(result).to.equal(1);
	});
	it('target not exists', () => {
		const result = findFirstOccurence([1, 3, 3, 3, 3, 6, 10, 10, 10, 100], 5);
		expect(result).to.equal(-1);
	});
})