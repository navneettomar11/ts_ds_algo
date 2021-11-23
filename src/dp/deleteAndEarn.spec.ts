import {assert} from 'chai';

function deleteAndEarn(nums: number[]): number {

	const arr = new Array<number>(10001).fill(0);
	for(let num of nums) {
		arr[num]+=num;
	}

	let inc = arr[0];
	let exc = 0;
	for(let i = 1; i < 10001; i++) {
		let excl_new = Math.max(inc, exc);
		//console.log('INC ', inc, ' exc ', exc, ' Excl new ', excl_new, 'arr[i]: ', arr[i]);
		inc = exc + arr[i];
		exc = excl_new;
	}

	return Math.max(inc, exc);
};

describe('Delete and Earn ', () => {
	it('nums = [3,4,2] ===> 6', () => {
		const result = deleteAndEarn([3,4,2]);
		assert.equal(result, 6);
	});
	it('nums = [2,2,3,3,3,4] ===> 9', () => {
		const result = deleteAndEarn([2,2,3,3,3,4]);
		assert.equal(result, 9);
	});
	it('nums = [3,1] ===> 4', () => {
		const result = deleteAndEarn([3,1]);
		assert.equal(result, 4);
	});
})