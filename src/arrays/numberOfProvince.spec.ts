import {assert} from 'chai';

function findCircleNum(isConnected: number[][]): number {
	
	const rowSize = isConnected.length;
	const colSize = isConnected[0].length;
	const visited: boolean[] = new Array<boolean>(rowSize);
	visited.fill(false);
	let count = 0;
	for(let r = 0; r < rowSize; r++) {
		if(!visited[r]) {
			count++;
			dfs(isConnected, r, visited);
		}
	}
	return count;
};

function dfs(isConnected: number[][], city: number, visited: boolean[]) {
	if(visited[city]) {
		return;
	}
	visited[city] = true;
	for(let i = 0; i < isConnected[city].length; i++) {
		if(isConnected[city][i] === 1){
			dfs(isConnected, i, visited);
		}
	}

}

describe('Number of Provinces', () => {
	it('isConnected = [[1,1,0],[1,1,0],[0,0,1]] ===> 2', () => {
		const result = findCircleNum([[1,1,0],[1,1,0],[0,0,1]]);
		assert.equal(result, 2);
	});
	it('isConnected = [[1,0,0],[0,1,0],[0,0,1]] ===> 3', () => {
		const result = findCircleNum([[1,0,0],[0,1,0],[0,0,1]]);
		assert.equal(result, 3);
	});
	it(`isConnected [[1,0,0,1],[0,1,1,0],[0,1,1,1],[1,0,1,1]] ===> 1`, () => {
		const result = findCircleNum([[1,0,0,1],[0,1,1,0],[0,1,1,1],[1,0,1,1]]);
		assert.equal(result, 1);
	})
});