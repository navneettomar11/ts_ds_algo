import {assert} from 'chai';
import {Node} from './treeNode';

function connect(root: Node | null): Node | null {
	const queue: Array<Node | null> = [];

	queue.push(root);
	while(queue.length !== 0) {
		const levelSize = queue.length;
		let prev: Node | null = null;
		for(let i = 0; i < levelSize; i++) {
			const node = queue.shift() || undefined;
			if(prev !== null) {
				prev.next = node || null;
			}
			if(node && node?.left !== null) {
				queue.push(node?.left);
			}
			if(node &&  node?.right !== null) {
				queue.push(node?.right);
			}
			prev = node || null;
		}
	}

	return root;
};

describe('Populating Next Right Pointer', () => {
	it('root = [1,2,3,4,5,null,7] ===> [1,#,2,3,#,4,5,7,#]', () => {
		let root = new Node(1);
		root.left = new Node(2);
		root.right = new Node(3);
		root.left.left = new Node(4);
		root.left.right = new Node(5);
		root.right.right = new Node(7);
		const result = connect(root);
		assert.ok(root !== null);
		assert.ok(root.next === null);
		assert.ok(root.left.next === root.right);
		assert.ok(root.right.next === null);
		assert.ok(root.left.left.next === root.left.right);
		assert.ok(root.left.right.next === root.right.right);
	});
});