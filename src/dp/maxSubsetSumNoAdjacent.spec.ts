import {assert} from 'chai';

function maxSubsetSumNoAdjacent(array: number[]): number {
	if(!array || array.length === 0) {
		return 0;
	}
	if(array.length === 1) return array[0];
	let second = array[0];
	let first = Math.max(array[0], array[1]);
	for(let i=2; i < array.length; i++) {
		const current = Math.max(first, second + array[i]);
		second = first;
		first = current;
	}

	return first;
}




/**
 * Top down approach
 * @param array 
 */
function memoMaxSubsetNoAdjacent(array: number[]): number {
	if(!array || array.length === 0) {
		return 0;
	}
	const memo: number[] = new Array<number>(array.length).fill(-1);

	
	return memoHelper(memo, array, 0);
}


function memoHelper(memo: number[], array: number[], currentIdx: number): number{
	if(currentIdx >= array.length) {
		return 0;
	}
	if(memo[currentIdx] === -1) {
		let sumOne = array[currentIdx] + Math.max(memoHelper(memo,array, currentIdx + 2), memoHelper(memo, array, currentIdx + 3));
		let sumTwo = memoHelper(memo, array, currentIdx + 1);
		//console.log('SumOne ', sumOne, ' SumTwo ', sumTwo, ' CurrentIdx ', currentIdx);
		memo[currentIdx] = Math.max(sumOne, sumTwo);
	}
	//console.log(memo);
	return memo[currentIdx];
}


function bottomUpMaxSubsetNoAdjacent(array: number[]): number {
	const dp: number[] = new Array(array.length + 2).fill(0);

	for(let i = array.length - 1; i>=0; i--) {
		dp[i] = Math.max(dp[i+1], array[i] + dp[i+2]);
		//console.log(dp)
	}
	return dp[0];
}




describe('Max Subset Sum No Adjacent', () => {
	it('array = [75, 105, 120, 75, 90, 135] ===> 330', () => {
		assert.equal(maxSubsetSumNoAdjacent([75, 105, 120, 75, 90, 135]), 330);
	});

	it('array= [7, 10, 12, 7, 9, 14] ===> 33', () => {
		assert.equal(maxSubsetSumNoAdjacent([7, 10, 12, 7, 9, 14]), 33);
	});

	it('array = [75, 105, 120, 75, 90, 135] ===> 330', () => {
		assert.equal(memoMaxSubsetNoAdjacent([75, 105, 120, 75, 90, 135]), 330);
	});

	it('array= [7, 10, 12, 7, 9, 14] ===> 33', () => {
		assert.equal(memoMaxSubsetNoAdjacent([7, 10, 12, 7, 9, 14]), 33);
	});

	it('array= [7, 10, 12, 7, 9, 14] ===> 33', () => {
		assert.equal(bottomUpMaxSubsetNoAdjacent([7, 10, 12, 7, 9, 14]), 33);
	});
})