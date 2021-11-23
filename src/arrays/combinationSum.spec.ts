import {assert} from 'chai';

function combinationSum(candidates: number[], target: number): number[][] {
	const result: number[][] = [];
	combinationSumHelper(candidates, [], result, target , 0);
	//console.log('Final Result', result);
	return result;
};

function combinationSumHelper(candidates: number[], 
	combination: number[] ,
	result: number[][], 
	target: number, 
	currentIndex: number) {
	if(currentIndex === candidates.length) {
		if(target === 0 ) {
			result.push([...combination]);
		}
		return;
	}
	//console.log('Target ', target, 'CurrentIndex ', currentIndex, ' Combi ', combination, 'Result ', result);

	
	if(candidates[currentIndex] <= target) {
		combination.push(candidates[currentIndex]);
		combinationSumHelper(candidates, combination, result, target - candidates[currentIndex], currentIndex);
		//console.log(combination);
		combination.splice(combination.length - 1);
	}
	combinationSumHelper(candidates, combination, result, target, currentIndex + 1);
	
}


describe('Combinational Sum', () => {
	it('candidates = [2,3,6,7], target = 7 ===> [[2,2,3],[7]]', () => {
		const result = combinationSum([2,3,6,7], 7);
		assert.deepEqual(result, [[2,2,3], [7]]);
	});

	it('candidates = [2,3,5], target = 8 ===> [[2,2,2,2],[2,3,3],[3,5]]', () => {
		const result = combinationSum([2,3,5], 8);
		assert.deepEqual(result, [[2,2,2,2],[2,3,3],[3,5]]);
	});

	it('candidates = [2], target = 1 ===> []', () => {
		const result = combinationSum([2], 1);
		assert.deepEqual(result, []);
	});
})