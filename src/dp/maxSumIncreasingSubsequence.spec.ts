import {assert} from 'chai';

function maxSumIncreasingSubsequence(array: number[]): [number, number[]] {
	const sequences: number[] = new Array(array.length).fill(NaN);
	const sums = array.map(num => num);
	let maxSumIdx = 0;
	for(let i = 0; i < array.length; i++) {
		for(let j = 0; j < i; j++) {
			if(array[j] < array[i] && (sums[j] + array[i]) >= sums[i]) {
				sums[i] = sums[j] + array[i];
				sequences[i] = j;
			}
		}
		if(sums[i] >= sums[maxSumIdx]) maxSumIdx = i;
	}

	return [sums[maxSumIdx], buildSequence(array, sequences, maxSumIdx)];
}

function buildSequence(array: number[], sequences: number[], currentIdx: number): number[] {
	const sequence: number[] = [];
	while(!isNaN(currentIdx)) {
		sequence.unshift(array[currentIdx]);
	
		currentIdx = sequences[currentIdx];
	}
	return sequence;
}

describe('Max Sum Increasing Subsequences', () => {
	it('array = [8,12,2,3,15,5,7] ===> [35, [8,12,15]]', () => {
		assert.deepEqual(maxSumIncreasingSubsequence([8,12,2,3,15,5,7]), [35, [8,12,15]]);
	})
})
