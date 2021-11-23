import {assert} from 'chai';


function subsets(nums: number[]): number[][] {
	let result: number[][] = [];

	result.push([]);
	for(let i = 0; i < nums.length; i++) {
		const newList = [];
		for(let permutation of result) {
			const ll = permutation.concat([nums[i]]);

			const found = result.some(r => {
				if(r.length === 0 || ll.length !== r.length){
					return false;
				}
				for(let i = 0; i < ll.length; i++) {
					if(ll[i] !== r[i]) {
						return false;
					}
				}
				return true;
			});
			if(!found) {
				
				newList.push(ll);
			}
		}
		result = result.concat(newList);
	}
	//console.log('Final Result ', result);
	return result;
};

describe('Subset', () => {
	it('[1,2,3] ===> [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]', () => {
		const result = subsets([1,2,3]);
		assert.deepEqual(result, [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]);
	});

	it('[1,2,2] ===> [[],[1],[1,2],[1,2,2],[2],[2,2]]', () => {
		const result = subsets([1,2,2]);
		assert.deepEqual(result, [[],[1],[2],[1,2],[2,2],[1,2,2]]);
	});
})