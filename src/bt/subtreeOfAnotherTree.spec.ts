import {assert} from 'chai';
import {TreeNode} from './treeNode';

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
	
	if(isSameTree(root, subRoot)) {
		return true;
	}
	let result = false;
	if(root?.left) {
		result = result || isSubtree(root?.left, subRoot) 
	}
	if(root?.right) {
		result = result || isSubtree(root?.right, subRoot);
	}

	return result;
};

function isSameTree(root: TreeNode | null, subRoot: TreeNode | null) : boolean {
	if(root === null && subRoot === null) {
		return true;
	} 
	if(root === null || subRoot === null) {
		return false;
	}
	if(root?.val === subRoot?.val) {
		return isSameTree(root?.left, subRoot?.left)  && 
		isSameTree(root?.right , subRoot?.right);
	}
	return false;	
}


describe('Subtree of Another tree', () => {
	it('root = [3,4,5,1,2], subRoot = [4,1,2] ===> true', () => {
		const root = new TreeNode(3);
		root.left = new TreeNode(4);
		root.right = new TreeNode(5);
		root.left.left  = new TreeNode(1);
		root.left.right = new TreeNode(2);
	
		const subRoot = new TreeNode(4);
		subRoot.left = new TreeNode(1);
		subRoot.right = new TreeNode(2);

		assert.isTrue(isSubtree(root, subRoot));
	});

	it('root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2] ===> true', () => {
		const root = new TreeNode(3);
		root.left = new TreeNode(4);
		root.right = new TreeNode(5);
		root.left.left  = new TreeNode(1);
		root.left.right = new TreeNode(2);
		root.left.right.right = new TreeNode(0);

		const subRoot = new TreeNode(4);
		subRoot.left = new TreeNode(1);
		subRoot.right = new TreeNode(2);
		
		assert.isFalse(isSubtree(root, subRoot));
	});

	it('root = [1,1], subRoot = [1] ===> true', () => {
		const root = new TreeNode(1);
		root.left = new TreeNode(1);

		const subRoot = new TreeNode(1);
		assert.isTrue(isSubtree(root, subRoot));
	})
})