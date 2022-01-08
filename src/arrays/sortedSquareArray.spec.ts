import {assert} from 'chai';

export function sortedSquaredArray(array: number[]): number[] {
	let left = 0;
	let right = array.length -1;
	let squaredArray = new Array<number>(array.length).fill(0);
	let highIndex = array.length - 1;
	while(left <= right) {
		let leftSqr = array[left] * array[left];
		let rightSqr = array[right] * array[right];
		//console.log('Left Sqr ', leftSqr, 'Right Sqr ', rightSqr, ' LI ', left, ' RI ', right);
		if(leftSqr > rightSqr) {
			squaredArray[highIndex--] = leftSqr;
			left++;
		} else {
			squaredArray[highIndex--] = rightSqr;
			right--;
		}
		//console.log('Squared ', squaredArray);
	}
	return squaredArray;
  }
  

describe('Sorted Square Array', () => {
	it('array = [1, 2, ,3, 5, 6, 8, 9] ==> [1, 4, 9, 25, 36, 64, 81]', () => {
		const array: number[] = [1, 2, 3, 5, 6, 8, 9] as number[];
		const expected: number[] = [1, 4, 9, 25, 36, 64, 81];
		assert.deepEqual(sortedSquaredArray(array), expected);
	});
	it('array = [-50, -13, -2, -1, 0, 0, 1, 1, 2, 3, 19, 20] ==> [0, 0, 1, 1, 1, 4, 4, 9, 169, 361, 400, 2500]', () => {
		const array: number[] =[-50, -13, -2, -1, 0, 0, 1, 1, 2, 3, 19, 20] as number[];
		const expected: number[] = [0, 0, 1, 1, 1, 4, 4, 9, 169, 361, 400, 2500];
		assert.deepEqual(sortedSquaredArray(array), expected);
	});
});