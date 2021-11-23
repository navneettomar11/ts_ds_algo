import {assert} from 'chai';
import {TreeNode} from './treeNode';


function sortedArrayToBST(nums: number[]): TreeNode | null {
	return helper(nums, 0, nums.length - 1);
};

function helper(nums: number[], start: number, end: number): TreeNode | null {
	if(start > end ) {
		return null;
	}
	//console.log(start, end);
	const mid = start + Math.trunc((end - start)/2);
	//console.log('mid', mid);
	const root =new TreeNode(nums[mid]);
	root.left = helper(nums, start, mid-1);
	root.right = helper(nums, mid+1, end);
	return root;
}


describe('Convert Sorted Array to Binary Search Tree', () => {
	it('nums = [-10,-3,0,5,9] ===> [0,-3,9,-10,null,5]', () => {
		const result = sortedArrayToBST([-10,-3,0,5,9]);
		//console.log(result);
		assert.ok(result !== null && result.val === 0);
		assert.ok(result?.left?.val === -10  && result.left.right?.val === -3);
		assert.ok(result?.right?.val === 5  && result.right.right?.val === 9);
	});
})