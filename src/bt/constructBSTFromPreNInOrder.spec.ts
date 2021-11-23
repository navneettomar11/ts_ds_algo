import {assert} from 'chai';
import {TreeNode} from './treeNode';

let preOrderIndex = 0;
const inorderMap = new Map<number, number>();
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
	inorderMap.clear();
	preOrderIndex = 0;
	for(let i = 0; i < inorder.length; i++) {
		inorderMap.set(inorder[i], i);
	}
	//console.log(inorderMap, preorder);
	return buildTreeHelper(preorder, 0, preorder.length -1);
};

function buildTreeHelper(preorder: number[], left: number, right: number) : TreeNode | null{
	if(left > right) {
		return null;
	}
	const rootValue = preorder[preOrderIndex++]
	const root = new TreeNode(rootValue);
	
	root.left = buildTreeHelper(preorder, left, (inorderMap.get(rootValue) ||  0) - 1);
	root.right = buildTreeHelper(preorder, (inorderMap!.get(rootValue) || 0) +1 , right);

	return root;
}


describe('Construct BST from preorder and inorder traversal ', () => {
	it(`preorder = [3,9,20,15,7], inorder = [9,3,15,20,7] ===> [3,9,20,null,null,15,7]`, () => {
		const root = buildTree([3,9,20,15,7], [9,3,15,20,7]);
		assert.isNotNull(root);
		assert.ok(root?.val === 3 && root.left?.val === 9 && root.right?.val===20);
	});

	it(`preorder = [-1], inorder = [-1] ===> [-1]`, () => {
		const root = buildTree([-1], [-1]);
		assert.isNotNull(root);
		assert.ok(root?.val === -1);
	});
});