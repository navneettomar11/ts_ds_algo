import {assert} from 'chai';
import {TreeNode} from './treeNode';

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
	const result: number[][] = [];
	if(!root) {
		return result;
	}
	pathSumHelper(root, targetSum, [], result);
	//console.log('Final', result);
	return result;
};

function pathSumHelper(node: TreeNode | null, targetSum: number, sumSet: number[], result: number[][]) {
	if(!node) {
		return;
	}	
	const nodeValue = node.val;
	if(node.left === null && node.right === null && targetSum === nodeValue) {
		//console.log(sumSet, ' --- ', node?.val, ' Target == ', targetSum);
		sumSet.push(nodeValue);
		result.push(sumSet);
		return;
	}
	sumSet.push(nodeValue);
	if(node.left)
		pathSumHelper(node.left, targetSum - nodeValue, [...sumSet], result);
	if(node.right)	
		pathSumHelper(node.right, targetSum - nodeValue, [...sumSet], result);
} 

describe('Path Sum II', () => {
	it('root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22 ===> [[5,4,11,2],[5,8,4,5]]', () => {
		const root = new TreeNode(5);
		root.left = new TreeNode(4);
		root.right = new TreeNode(8);
		root.left.left = new TreeNode(11);
		root.right.left = new TreeNode(13);
		root.right.right = new TreeNode(4);
		root.right.right.left = new TreeNode(5);
		root.right.right.right = new TreeNode(1);
		root.left.left.left = new TreeNode(7);
		root.left.left.right = new TreeNode(2);

		const result = pathSum(root, 22);
		assert.deepEqual(result, [[5,4,11,2],[5,8,4,5]]);
	});

	it('root = [1,2] ===> []',() => {
		const root = new TreeNode(1);
		root.left = new TreeNode(2);
		const result = pathSum(root, 1);
		assert.deepEqual(result, []);
	})
})
