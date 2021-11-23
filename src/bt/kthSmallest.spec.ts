import {assert} from 'chai';
import {TreeNode} from './treeNode';


function kthSmallest(root: TreeNode | null, k: number): number {
	const nums: number[] = [];
	inOrder(root, nums);
	return nums[k-1];
};

function inOrder(root: TreeNode | null, nums: number[]) {
	if(!root) {
		return;
	}
	inOrder(root.left, nums);
	nums.push(root.val);
	inOrder(root.right, nums);
}

describe('Kth Smallest Element in a BST', () => {

	it('root = [3,1,4,null,2], k = 1 ===> 1', () => {
		const root = new TreeNode(3);
		root.left = new TreeNode(1);
		root.right = new TreeNode(4);
		root.left.right = new TreeNode(2);

		const result = kthSmallest(root, 1);
		assert.equal(result, 1);
	});

	it('root = [5,3,6,2,4,null,null,1], k = 3 ===> 3', () => {
		const root = new TreeNode(5);
		root.left = new TreeNode(3);
		root.right = new TreeNode(6);
		root.left.left = new TreeNode(2);
		root.left.right = new TreeNode(4);
		root.left.left.left = new TreeNode(1);


		const result = kthSmallest(root, 3);
		assert.equal(result, 3);
	});
});
