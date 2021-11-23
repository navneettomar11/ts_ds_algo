import {assert} from 'chai';

function numIslands(grid: string[][]): number {

	if(!grid || grid.length === 0) {
		return 0;
	}
	const rowSize = grid.length;
	const colSize = grid[0].length;
	const visited: boolean[][] = new Array<boolean[]>(rowSize);
	for(let i = 0; i < rowSize; i++) {
		visited[i] = new Array<boolean>(colSize);
		visited[i].fill(false);
	}
	let count = 0;	
	for(let i = 0; i < rowSize; i++) {
		for(let j = 0; j < colSize; j++) {
			if(grid[i][j] === '1' && !visited[i][j]) {
				count+=1;
				visitAdjacentsIslands(grid, i, j, rowSize, colSize, visited);
			}
		}
	}
	return count;
};

function visitAdjacentsIslands(grid: string[][], row: number, col: number, 
	rowSize: number, colSize: number, visited: boolean[][]) {
		if(row >= rowSize || col >= colSize || grid[row][col] === '0' || visited[row][col]) {
			return;
		} 
		visited[row][col] = true;
		if(col > 0) {
			visitAdjacentsIslands(grid, row, col - 1,rowSize, colSize, visited);
		}    
		visitAdjacentsIslands(grid, row, col + 1,rowSize, colSize, visited);
		if(row > 0) {
			visitAdjacentsIslands(grid, row - 1, col ,rowSize, colSize, visited);
		}    
		visitAdjacentsIslands(grid, row+1, col,rowSize, colSize, visited);
}



describe('Number of islands', () => {
	it(`[
		["1","1","1","1","0"],
		["1","1","0","1","0"],
		["1","1","0","0","0"],
		["0","0","0","0","0"]
	  ] ===> 1`, () => {
		  const result = numIslands([
			["1","1","1","1","0"],
			["1","1","0","1","0"],
			["1","1","0","0","0"],
			["0","0","0","0","0"]
		  ]);
		  assert.equal(result, 1);
	  });

	  it(`[
		["1","1","0","0","0"],
		["1","1","0","0","0"],
		["0","0","1","0","0"],
		["0","0","0","1","1"]
	  ] ===> 3`, () => {
		const result = numIslands([
			["1","1","0","0","0"],
			["1","1","0","0","0"],
			["0","0","1","0","0"],
			["0","0","0","1","1"]
		  ]);
		  assert.equal(result, 3);
	  });

	  it(`[["0","1","0"],["1","0","1"],["0","1","0"]] ===> 4`, () => {
		  const result = numIslands([["0","1","0"],["1","0","1"],["0","1","0"]]);
		  assert.equal(result, 4);
	  });
	  it(`[["1","1","1"],["0","1","0"],["1","1","1"]] ===> 1`, () => {
		  const result = numIslands([["1","1","1"],["0","1","0"],["1","1","1"]]);
		  assert.equal(result, 1);
	  })
});