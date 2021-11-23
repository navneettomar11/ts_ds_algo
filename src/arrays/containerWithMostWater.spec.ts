import {assert} from 'chai';

function maxArea(height: number[]): number {
	if(!height || height.length === 0) {
		return 0;
	}
	let left = 0;
	let right = height.length - 1;
	let max = 0;
	while(left < right) {
		const area = (right - left) * Math.min(height[left], height[right]);
		max = Math.max(max, area);
		if(height[left] < height[right]) {
			left++;
		} else {
			right--;
		}
	}

	return max;
};

describe('Container With Most Water', () => {
	it('height = [1,8,6,2,5,4,8,3,7] ===> 49', () => {
		const result = maxArea([1,8,6,2,5,4,8,3,7] );
		assert.equal(result, 49);
	})
})