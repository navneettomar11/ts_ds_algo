import { expect } from 'chai';

export function binarySearch(arr: number[], target: number): number {
	if(!arr || arr.length === 0) {
		return -1;
	}

	let low = 0;
	let high = arr.length - 1;
	while(low <= high) {
		const mid =	Math.trunc((high  + low)/2);
		if(arr[mid] === target) {
			return mid;
		} else if(target > arr[mid]) {
			low = mid + 1;
		} else {
			high = mid - 1;
		}
	}

	return -1;
}

describe('binary search', () => {
	it('test case 01 ', () => {
		const result = binarySearch([2,8,89,120,1000], 120);
		expect(result).to.equal(3);
	});
	
});