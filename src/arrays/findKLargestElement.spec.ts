import {assert} from 'chai';

function findKthLargest(nums: number[], k: number): number {
	const result: number[] = [];
	let heapSize = nums.length;
	for(let i = 0; i < k; i++) {
		buildMaxHeap(nums, heapSize);
		result[i] = nums[0];
		heapSize-=1;
		nums[0] = nums[heapSize];
	}
	return result[k-1];
};

function buildMaxHeap(nums: number[], heapSize: number) {
	for(let i = Math.trunc((heapSize - 1)/2); i>=0; i--) {
		maxHeapify(nums, i, heapSize);
	}
}

function maxHeapify(nums: number[], idx: number, heapSize: number) {
	const left = (2*idx) + 1;
	const right = (2*idx) + 2;
	let largest  = idx;
	if(left < heapSize && nums[left] > nums[idx]) {
		largest = left;
	}
	if(right < heapSize && nums[right] > nums[largest]) {
		largest = right;
	}
	if( idx !== largest) {
		const temp = nums[idx];
		nums[idx] = nums[largest];
		nums[largest] = temp; 
		maxHeapify(nums, largest, heapSize);
	}
}


describe('Kth Largest Element in an Array ', () => {
	it('nums = [3,2,3,1,2,4,5,5,6], k = 4 ===> 4', () => {
		const result = findKthLargest([3,2,3,1,2,4,5,5,6], 4);
		assert.equal(result, 4);
	});
})