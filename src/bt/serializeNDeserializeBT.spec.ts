import {assert} from 'chai';
import {TreeNode} from './treeNode';

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
	const str: (string | null)[] = [];
	serializeHelper(root, str);
	return str.join(',');
};

function serializeHelper(root: TreeNode | null, str: (string | null)[]) {
	if(!root) {
		str.push(null);
		return;
	}
	str.push(''+root.val);
	serializeHelper(root.left, str);
	serializeHelper(root.right, str);

}

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
	const nodes = data.split(',');
	const iterator = new StringIterator(nodes);
	return deserializeDFS(iterator)	
};

class StringIterator  {
	private index = 0;
	str: string[];
	constructor(str: string[]) {
		this.str= str;
	}
	
	next(): string | null {
		if(this.index > this.str.length) {
			return null;
		}
		return this.str[this.index++];
	}

}



function deserializeDFS(nodeNext: StringIterator): TreeNode | null {
	const val = nodeNext.next();
	console.log('Val ', val);
	if(!val) {
		return null;
	}
	const root = new TreeNode(parseInt(val));
	root.left = deserializeDFS(nodeNext);
	root.right = deserializeDFS(nodeNext);

	return root;
}


describe('Serialize and Deserialize Binary Tree', () => {
	it('root = [1,2,3,null,null,4,5] ===> 1,2,3,null,null,4,5]', () => {
		const root = new TreeNode(1);
		root.left = new TreeNode(2);
		root.right = new TreeNode(3);
		root.right.left = new TreeNode(4);
		root.right.right = new TreeNode(5);

		const result = serialize(root);
		console.log('Result', result);
		const node = deserialize(result);
		console.log('Deserialize ', node);
		assert.deepEqual(node, root);
	})
})