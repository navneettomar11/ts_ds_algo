import {assert} from 'chai';

function getMaxLen(nums: number[]): number {
	let totalNegatives = 0;
	let zeroFound = -1;
	let negativeFound = -1;
	let maxLength = 0;

	for(let i = 0; i < nums.length; i++) {
		if(nums[i] < 0) {
			totalNegatives++;
			if(negativeFound === -1) negativeFound = i;
		}
		if(nums[i] === 0) {
			zeroFound = i;
			totalNegatives = 0;
			negativeFound = -1;
		} else {
			if(totalNegatives % 2 === 0) {
				maxLength = Math.max(maxLength, i - zeroFound);
			} else {
				maxLength = Math.max(maxLength, i - negativeFound);
			}
		}
	}

	return maxLength;
};

describe('Maximum Length of Subarray With Positive Product', () => {
	it('nums = [1,-2,-3,4] ===> 4', () => {
		assert.equal(getMaxLen([1,-2,-3,4]), 4);
	});
})