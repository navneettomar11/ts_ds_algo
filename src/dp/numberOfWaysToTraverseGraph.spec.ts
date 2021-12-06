import {assert} from 'chai';

function numberOfWaysToTraverseGraph(width: number, height: number) : number {

	return helper(width, height, 0, 0);
}

function helper(width: number, heigth: number, i: number, j : number): number {
	if(i === (width  - 1) && j === (heigth - 1))  {
		return 1;
	}
	if(i >= width || j >= heigth) {
		return 0;
	}
	return  helper(width, heigth, i, j+1) + helper(width, heigth, i+1, j);

}


function numberOfWaysToTraverseGraphMemo(width: number, height: number) : number {
	const memo: number[][] = [];
	for(let i = 0; i<=height; i++) {
		memo.push([]);
	}
	const result = helperMemo(memo, width, height, 0, 0);
	return result;
}


function helperMemo(memo: number[][], width: number, heigth: number, i: number, j : number): number {
	if(i === (width  - 1) && j === (heigth - 1))  {
		return 1;
	}
	if(i >= width  ||  j >= heigth ) {
		return 0;
	}
	if(!memo[j][i]){
		const right = helperMemo(memo, width, heigth, i+1, j);
		const down = helperMemo(memo, width, heigth, i, j+1);
		memo[j][i] =  right + down ;
	}
	return memo[j][i] ;

}

function numberOfWaysToTraverseGraphBottom(width: number, height: number) : number {
	const dp: number[][] = [];
	for(let i = 0; i <= height; i++) {
		dp.push([]);
		for(let j = 0; j <=width; j++) {
			dp[i].push(0);
		}
	}
	for(let widthIdx = 1; widthIdx <= width; widthIdx++) {
		for(let heightIdx = 1; heightIdx <= height; heightIdx++) {
			if(widthIdx === 1 || heightIdx === 1) {
				dp[heightIdx][widthIdx] = 1;
			} else {
				dp[heightIdx][widthIdx]=  dp[heightIdx][widthIdx-1] + dp[heightIdx - 1][widthIdx];
			}
		}
	}
	return dp[height][width];

}

function numberOfWaysToTraverseGraphPermuationFormula(width: number, height: number): number {
	const xDistanceToCorner = width - 1;
	const yDistanceToCornder = height - 1;

	const numerator = factorial(xDistanceToCorner + yDistanceToCornder);
	const denominator = factorial(xDistanceToCorner) * factorial(yDistanceToCornder);

	return Math.floor(numerator / denominator);
}


function factorial(num: number): number {
	let result = 1;
	for(let n = 2; n <=num; n++) {
		result*=n;
	}
	return result;
}


describe('Number of Ways To Traverse Graph', () => {
	describe('Brute Force ', () => {
		it('width = 2 and height = 3 ===> 3', () => {
			assert.equal(numberOfWaysToTraverseGraph(2,3), 3);
		});
	
		it('width = 4 and height = 3 ===> 10', () => {
			assert.equal(numberOfWaysToTraverseGraph(4,3), 10);
		});
	});

	describe('Memoization', () => {
		it('width = 2 and height = 3 ===> 3', () => {
			assert.equal(numberOfWaysToTraverseGraphMemo(2,3), 3);
		});
	
		it('width = 4 and height = 3 ===> 10', () => {
			assert.equal(numberOfWaysToTraverseGraphMemo(4,3), 10);
		});
	});

	describe('Tabulation', () => {
		it('width = 2 and height = 3 ===> 3', () => {
			assert.equal(numberOfWaysToTraverseGraphBottom(2,3), 3);
		});
	});

	describe('Permuatation Formula', () => {
		it('width = 2 and height = 3 ===> 3', () => {
			assert.equal(numberOfWaysToTraverseGraphPermuationFormula(2,3), 3);
		});
	})
})