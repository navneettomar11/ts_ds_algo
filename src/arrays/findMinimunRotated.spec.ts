import {expect} from 'chai';

function findMinRotatedArray(arr: number[]): number {
	let low = 0;
	let high = arr.length - 1;
	let minNumber = Number.MAX_VALUE;
	while(low <= high) {
		const mid = low + Math.trunc((high - low)/2);
		minNumber = Math.min(minNumber, arr[mid], arr[low], arr[high]);
		if(minNumber === arr[low]) {
			high = mid - 1;
		} else if(minNumber === arr[mid]) {
			high = mid;
		} else {
			low = mid + 1;
		}
	}

	return minNumber;
}


describe('find min element in rotated array', () => {
	it('[30, 40, 50, 10, 20] => 10', () => {
		const result = findMinRotatedArray([30, 40, 50, 10, 20]);
		expect(result).to.equal(10);
	});

	it('[0] => 0', () => {
		const result = findMinRotatedArray([0]);
		expect(result).to.equal(0);
	});

	it('[3,4,5,1,2] ==> 1', () => {
		const result = findMinRotatedArray([3,4,5,1,2]);
		expect(result).to.equal(1);
	});

	it('[2,3,4,5,1] ==> 4', () => {
		const result = findMinRotatedArray([2,3,4,5,1]);
		expect(result).to.equal(1);
	})
});