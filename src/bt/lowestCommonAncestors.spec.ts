import {assert} from 'chai';
import {TreeNode} from './treeNode';

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, 
	q: TreeNode | null): TreeNode | null {
	const pPath: TreeNode[] = [];
	getPath(root, p, pPath);
	const qPath: TreeNode[] = [];
	getPath(root, q, qPath);
	let ancestor: TreeNode | null = null;	
	while(pPath.length !== 0 && qPath.length !== 0) {
		const pNode = pPath.shift();
		const qNode =  qPath.shift();
		if( pNode?.val !== qNode?.val) {
			break;
		}
		ancestor = pNode || null;
	}
	return ancestor;
};

function getPath(root: TreeNode | null, target: TreeNode | null, queue: TreeNode[]): boolean {
	if(!root) {
		return false;
	}

	queue.push(root);
	if(root.val === target?.val) {
		return true;
	}

	if(root.left && getPath(root.left, target, queue)) {
		return true;
	}

	if(root.right && getPath(root.right, target, queue)) {
		return true;
	}
	queue.splice(queue.length -1, 1);
	return false;
}


describe('Lowest Common Ancestors ',() => {
	it('root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1 ===> 3', () => {
		const root = new TreeNode(3);
		root.left = new TreeNode(5);
		root.right = new TreeNode(1);
		root.left.left = new TreeNode(6);
		root.left.right = new TreeNode(2);
		root.right.left = new TreeNode(0);
		root.right.right = new TreeNode(8);
		root.left.right.left = new TreeNode(7);
		root.left.right.right = new TreeNode(4);

		const result = lowestCommonAncestor(root, root.left, root.right);
		assert.equal(result, root);
	});
	it('root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1 ===> 5', () => {
		const root = new TreeNode(3);
		root.left = new TreeNode(5);
		root.right = new TreeNode(1);
		root.left.left = new TreeNode(6);
		root.left.right = new TreeNode(2);
		root.right.left = new TreeNode(0);
		root.right.right = new TreeNode(8);
		root.left.right.left = new TreeNode(7);
		root.left.right.right = new TreeNode(4);

		const result = lowestCommonAncestor(root, root.left, root.left.right.right);
		assert.equal(result, root.left);
	});
	it('root = [1,2,3], p = 2, q=3 ===> 1', () => {
		const root = new TreeNode(1);
		root.left = new TreeNode(2);
		root.right = new TreeNode(3);

		const result = lowestCommonAncestor(root, root.left, root.right);
		assert.equal(result, root);
	});	
})