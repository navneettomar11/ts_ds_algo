import {assert} from 'chai';


function topKFrequent(nums: number[], k: number): number[] {
	const map = new Map<number, number>();
	for(let n of nums) {
		const count = map.get(n) || 0;
		map.set(n, count + 1);
	}	
	const bucket: number[][] = [];
	for(let i = 0; i <= nums.length; i++) bucket.push([]);
	console.log(map);
	map.forEach((count, num) => {
		bucket[count].push(num);
	});
	let result: number[] = [];
	for(let i = nums.length ; i>=0; i--) {
		if(bucket[i].length > 0) {
			result = result.concat(bucket[i]);
		}
		if(result.length === k) {
			break;
		}
	}

	return result;
};

describe('Top K Frequent Elements', () => {
	it('nums = [1,1,1,2,2,3], k = 2', () => {
		const result = topKFrequent([1,1,1,2,2,3], 2);
		assert.deepEqual(result, [1,2]);
	});

	it('nums = [1], k = 1', () => {
		const result = topKFrequent([1], 1);
		assert.deepEqual(result, [1]);
	});
})