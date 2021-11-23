import {assert} from 'chai';

function uniquePaths(m: number, n: number): number {
	return uniquePathHelper(m, n, 0, 0);	
};

function uniquePathsMemoization(m: number, n: number): number {
	const memoization: number[][] = [];
	for(let r = 0; r < m; r++) {
		memoization.push([]);
	}
	memoization.forEach(arr => {
		for(let i = 0; i < n; i++) {
			arr.push(-1);
		}
	});
	//console.log('Before ==> ',memoization);
	const result =  uniquePathMemoHelper(memoization, m, n, 0, 0);	
	//console.log(memoization);

	return memoization[0][0];
};


function uniquePathsTabulation(m: number, n: number): number {
	const dp: number[] = [];
	for(let r = 0; r < n; r++) {
		dp.push(0);
	}
	dp[0] = 1;
	for(let r = 0; r<m ; r++) {
		for(let c = 1; c<n; c++) {
			dp[c]+=dp[c - 1];
		}
	}


	return dp[n - 1];
};


function uniquePathHelper(m: number, n: number, r: number,c : number): number {

	if(r === m - 1 && c === n - 1) {
		return 1;
	}
	if(r >= m  || c >= n) {
		return 0;
	}

	return uniquePathHelper(m, n, r + 1, c) + uniquePathHelper(m, n, r, c+1);
 
}

function uniquePathMemoHelper(memoization: number[][], m: number, n: number, r: number, c: number): number {
	//console.log('First ==> ',r, c);
	//console.table(memoization);
	if(r === m - 1 && c === n - 1) {
		return 1;
	}
	//console.log('Second ==> ',r, c);
	if(r >= m  || c >= n) {
		return 0;
	}
	//console.log('third ==> ',r, c);
	//console.log('rrrr --- > ', memoization[r][c])
	if(memoization[r][c] === -1) {
		//console.log('['+r+','+c+'], down = ['+(r+1)+','+c+'], right = ['+r+','+(c+1)+']');
		const down = uniquePathMemoHelper(memoization,m, n, r + 1, c);
		const right = uniquePathMemoHelper(memoization,m, n, r, c+1);
		//console.log('Memp ==> ', memoization[r][c]);
		memoization[r][c] = down + right;
		
	}
	//console.log('[r,c] = ['+r+','+c+']',' Memo =',memoization[r][c]);
	return memoization[r][c];
}


describe('Unique Paths', () => {
	describe('Brute Force ', () => {
		it('m = 3, n = 7 ===> 28', () => {
			const result = uniquePaths(3, 7);
			assert.equal(result, 28);
		});
		it('m = 3, n = 2 ===> 3', () => {
			const result = uniquePaths(3, 2);
			assert.equal(result, 3);
		});

		it('m = 3, n = 3 ===> 6', () => {
			const result = uniquePaths(3, 3);
			assert.equal(result, 6);
		});
	});
	describe('Memoization ', () => {
		it('m = 3, n = 7 ===> 28', () => {
			const result = uniquePathsMemoization(3, 7);
			assert.equal(result, 28);
		});
		it('m = 3, n = 2 ===> 3', () => {
			const result = uniquePathsMemoization(3, 2);
			assert.equal(result, 3);
		});

		it('m = 3, n = 3 ===> 6', () => {
			const result = uniquePathsMemoization(3, 3);
			assert.equal(result, 6);
		});
	});

	describe('Tabulation ', () => {
		it('m = 3, n = 7 ===> 28', () => {
			const result = uniquePathsTabulation(3, 7);
			assert.equal(result, 28);
		});
		it('m = 3, n = 2 ===> 3', () => {
			const result = uniquePathsTabulation(3, 2);
			assert.equal(result, 3);
		});

		it('m = 3, n = 3 ===> 6', () => {
			const result = uniquePathsTabulation(3, 3);
			assert.equal(result, 6);
		});
	});
})