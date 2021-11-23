import {assert} from 'chai';

function subarraySum(arr: number[], target: number): number[] {
	const prefixSum = new Map<number, number>([[0,0]]);
	let currentSum = 0;
	for(let i = 0; i < arr.length; i++) {
		currentSum+=arr[i];
		const compliment = currentSum - target;
		if(prefixSum.has(compliment)) {
			return [prefixSum.get(compliment) || 0, i+1];
		}
		prefixSum.set(currentSum, i + 1);
	}
	return [];
}

function subarraySumDivisble(nums: number[], k: number): number {
	const remainders = new Map<number, number>([[0,1]]);
	let currentSum = 0;
	let count = 0;
	for(let i = 0; i < nums.length; i++) {
		console.log(remainders);
		currentSum+=nums[i];
		let remainder = currentSum % k;
		let compliment = (k - remainder) % k;
		console.log('current sum = ', currentSum, ' Rem ', remainder, ' Compliment ', compliment);
		if(remainders.has(compliment)) {
			count+= remainders.get(compliment) || 0;
		}
		remainders.set(compliment, (remainders.get(compliment) || 0) + 1 ); 
	}

	return count;
}

describe('Sum Subarry', () => {
	it('nums = [1 -20 -3 30 5 4], k = 7 ===> [1, 4]', () => {
		const result = subarraySum([1,-20,-3,30,5,4], 7);
		assert.deepEqual(result, [1,4]);
	});
	it('nums = [3,1,2,5,1], k = 3 ===> 6', () => {
		const result = subarraySumDivisble([3,1,2,5,1], 3);
		assert.equal(result, 6);
	})
});