import {assert} from 'chai';
import {TreeNode} from './treeNode';

function rightSideView(root: TreeNode | null): number[] {
	const result: number[] = [];
	if(!root) {
		return result;
	}
	rightSideViewHelper(root, result, 0);
	return result;
};

function rightSideViewHelper(root: TreeNode| null, result: number[], line: number) {
	if(!root) {
		return;
	}
	if(!result[line]) {
		result[line]= root.val;
	}
	rightSideViewHelper(root.right, result, line + 1);
	rightSideViewHelper(root.left, result, line + 1);

}

describe('Binary Tree Right Side View', () => {
	it('root = [1,2,3,null,5,null,4] ===> [1,3,4]', () => {
		const root = new TreeNode(1);
		root.left = new TreeNode(2);
		root.right = new TreeNode(3);
		root.left.right = new TreeNode(5);
		root.right.right = new TreeNode(4);
		const result = rightSideView(root);
		assert.deepEqual(result, [1,3,4]);
	});
	it('root = [1,2] ===> [1,2]', () => {
		const root = new TreeNode(1);
		root.left = new TreeNode(2);
		const result = rightSideView(root);
		assert.deepEqual(result, [1,2]);
	});
	it('root = [1,2,3,4] ===> [1,3,4]', () => {
		const root = new TreeNode(1);
		root.left = new TreeNode(2);
		root.right = new TreeNode(3);
		root.left.left = new TreeNode(4);
		const result = rightSideView(root);
		assert.deepEqual(result, [1,3,4]);
	});
});