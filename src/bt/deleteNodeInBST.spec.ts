import {assert} from 'chai';
import {TreeNode} from './treeNode';

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
	if(!root) {
		return null;
	}
	console.log('Before Delete --> ', root, ' key', key);
	if(key < root.val) {
		root.left = deleteNode(root.left, key);
	} else if(key > root.val) {
		root.right = deleteNode(root.right, key);
	} else {
		if(root.left === null) {
			return root.right;
		} else if(root.right === null) {
			return root.left;
		} 
		const minmalNode = findMin(root.right);
		//console.log('Minimal Node ', minmalNode);
		root.val = minmalNode!.val;
		root.right = deleteNode(root.right, root.val);
	}
	//console.log('After Delete --> ', root);
	return root;
};

function findMin(node : TreeNode | null): TreeNode | null {
	let current: TreeNode | null = node;
	while(current?.left !== null) {
		current = current!.left;
	}
	return current;
}


describe('Delete Node in BST', () => {
	it(`root = [5,3,6,2,4,null,7], key = 3 ===> [5,4,6,2,null,null,7]`, () => {
		const root = new TreeNode(5);
		root.left = new TreeNode(3);
		root.right = new TreeNode(6);
		root.left.left = new TreeNode(2);
		root.left.right = new TreeNode(4);
		root.right.right = new TreeNode(7);

		const result = deleteNode(root, 3);
		//console.log(result);
		assert.isNotNull(result);
		assert.ok(result?.val === 5 && result?.left?.left?.val === 2);
	});
})