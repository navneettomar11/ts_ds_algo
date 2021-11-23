import {assert} from 'chai';
import {TreeNode} from './treeNode';

function zigzagLevelOrder(root: TreeNode | null): number[][] {
	let leftToRight = true;
	const queue: TreeNode[]= [];
	const result: number[][] = [];
	if(!root) {
		return result;
	}
	queue.unshift(root);
	const isEmpty = (q: TreeNode[]) => q.length === 0;

	while(!isEmpty(queue)) {
		const levelSize = queue.length;
		const levelArray: number[] = [];
		for(let i = 0; i < levelSize; i++) {
			const node = queue.shift();
			if(node?.left)
				queue.push(node?.left);
			if(node?.right) 
				queue.push(node.right);
			
			if(!leftToRight) {
				levelArray.unshift(node!.val);
			} else {
				levelArray.push(node!.val);
			}
		}
		leftToRight = !leftToRight;
		result.push(levelArray);
	}
	//console.log('Final ', result);
	return result;
};

describe('Binary Tree Zigzag Level Order Traversal', () => {
	it(`root = [3,9,20,null,null,15,7] ===> [[3],[20,9],[15,7]]`, () => {
		const root = new TreeNode(3);
		root.left = new TreeNode(9);
		root.right = new TreeNode(20);
		root.right.left = new TreeNode(15);
		root.right.right = new TreeNode(7);

		const result = zigzagLevelOrder(root);
		assert.deepEqual(result, [[3],[20,9],[15,7]]);
	});

	it('[1,2,3,4,null,null,5] ===> [[1],[3,2],[4,5]]', () =>{
		const root = new TreeNode(1);
		root.left = new TreeNode(2);
		root.right = new TreeNode(3);
		root.left.left = new TreeNode(4);
		root.right.right = new TreeNode(5);

		const result = zigzagLevelOrder(root);
		assert.deepEqual(result, [[1],[3,2],[4,5]]);
	})
});