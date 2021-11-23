import {assert} from 'chai';

function permuteUnique(nums: number[]): number[][] {
	const result: number[][] = [];
	const counter = new Map<number, number>();
	for(let num of nums) {
		if(!counter.has(num)) {
			counter.set(num, 0);
		} 
		counter.set(num, (counter.get(num) || 0) + 1);
	}
	const comb = new Array<number>();
	permuteHelper(comb, counter, nums.length, result);
	return result;
};

function permuteHelper(comb: number[], counter: Map<number, number>, N: number, resut: number[][]) {
	if(comb.length === N) {
		resut.push([...comb]);
		return;
	}

	counter.forEach((value, key) => {
		let num = key;
		let count = value;
		if(count === 0) {
			return;
		}
		comb.push(num);
		counter.set(num, count - 1);
		permuteHelper(comb, counter, N, resut);

		comb.splice(comb.length - 1);
		counter.set(num, count);
	});
}


describe('Permutation II', () => {
	it(`nums = [1,1,2] ==> [[1,1,2],
	[1,2,1],
	[2,1,1]]`, () => {
		const result = permuteUnique([1,1,2]);
		assert.deepEqual(result, [[1,1,2],
			[1,2,1],
			[2,1,1]]);
	});

	it(`nums = [1,2,3] ==> [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]`, () => {
		const result = permuteUnique([1,2,3]);
		assert.deepEqual(result, [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]);
	});
})
