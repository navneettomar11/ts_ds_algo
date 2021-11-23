import {assert} from 'chai';

function combinationSum2(candidates: number[], target: number): number[][] {

	const result: number[][] = [];
	const counter = new Map<number, number>();
	for(let num of candidates) {
		counter.set(num, (counter.get(num) || 0) + 1);
	}
	const counterList: number[][] = [];
	counter.forEach((v, k) => {
		counterList.push([k, v]);
	});

	combinationSum2Helper([], counterList, result, target, 0);
	//console.log('Final Result ', result);
	return result;
};

function combinationSum2Helper(combination:number[], 
	counterList: number[][], 
	result: number[][], 
	target: number, index: number ) {
		//console.log(index, '--> ', combination, 'Target ', target, ' counter ', counter);
		if(target <= 0) {
			if(target === 0) {
				result.push([...combination]);
			}
			return;
		}
		for(let nextCurr = index; nextCurr < counterList.length; nextCurr++) {
			const entry = counterList[nextCurr];
			const num = entry[0];
			const count = entry[1];
			if(count <= 0) {
				continue;
			}
			combination.push(num);
			counterList[nextCurr] = [num, count - 1];
			combinationSum2Helper(combination, counterList, result, target - num, nextCurr);
			combination.splice(combination.length  - 1);
			counterList[nextCurr] = [num, count];
		}
	}


describe('Combination Sum 2', () => {

	it(`candidates = [2,5,2,1,2], target = 5 ===> [
		[1,2,2],
		[5]
		]`, () => {
		const result = combinationSum2([2,5,2,1,2], 5);
		assert.deepEqual(result, [
			[2,2,1],
			[5]
			]);
	});
});