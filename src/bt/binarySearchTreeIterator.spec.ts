import {assert} from 'chai';
import {TreeNode} from './treeNode';

class BSTIterator {
	stack: number[] = [];

    constructor(root: TreeNode | null) {
		this.reverseInOrder(root);
	}
	
	reverseInOrder(root: TreeNode | null) {
		if(!root) {
			return;
		}
		this.reverseInOrder(root.right);
		this.stack.push(root.val);
		this.reverseInOrder(root.left);
	}


    next(): number {
		return this.stack.pop() || -1;
    }

    hasNext(): boolean {
		return this.stack.length > 0;
    }
}

describe('Binary Search Tree Iterator', () => {
	it(`["BSTIterator", "next", "next", "hasNext", "next", "hasNext", "next", "hasNext", "next", "hasNext"]
	[[[7, 3, 15, null, null, 9, 20]], [], [], [], [], [], [], [], [], []] ===> 
	[null, 3, 7, true, 9, true, 15, true, 20, false]`, () => {
		const root = new TreeNode(7);
		root.left = new TreeNode(3);
		root.right = new TreeNode(15);
		root.right.left = new TreeNode(9);
		root.right.right = new TreeNode(20);

		const iterator = new BSTIterator(root);
		assert.equal(iterator.next(), 3);
		assert.equal(iterator.next(), 7);
		assert.isTrue(iterator.hasNext());
		assert.equal(iterator.next(), 9);
		assert.isTrue(iterator.hasNext());
		assert.equal(iterator.next(), 15);
		assert.isTrue(iterator.hasNext());
		assert.equal(iterator.next(), 20);
		assert.isFalse(iterator.hasNext());
	});
})