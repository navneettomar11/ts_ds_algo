import {assert} from 'chai';

function findMinOperations(s1: string, s2: string): number {

	return findMinOperationsHelper(s1,s2, 0,0);
}

function findMinOperationsHelper(s1: string, s2: string, i1: number, i2: number): number {
	if(i1 === s1.length) {
		return s2.length - i2;
	}

	if(i2 === s2.length) {
		return s1.length - i1;
	}

	if(s1.charAt(i1) === s2.charAt(i2)) {
		return findMinOperationsHelper(s1, s2, i1+1, i2+1);
	}

	const deletioOp = 1 + findMinOperationsHelper(s1, s2, i1+1, i2);
	const insertionOp = 1 + findMinOperationsHelper(s1, s2, i1, i2+1);
	const replaceOp = 1 + findMinOperationsHelper(s1, s2, i1+1, i2+1);

	return Math.min(deletioOp, insertionOp, replaceOp);
}

function findMinOperationsBottom(s1: string, s2: string): number {
	const dp: number[][] = [];
	for(let i = 0; i <= s1.length; i++) {
		dp.push(new Array<number>(s2.length + 1));
	}
	
	for(let i1 = 0; i1 <= s1.length; i1++) {
		dp[i1][0] = i1;
	}

	for(let i2 = 0; i2 <= s2.length; i2++ ) {
		dp[0][i2] = i2;
	}

	for(let i1=1; i1<=s1.length; i1++) {
		for(let i2 = 1; i2<=s2.length; i2++) {
			if(s1.charAt(i1-1) === s2.charAt(i2-1)) {
				dp[i1][i2] = dp[i1-1][i2-1];
			} else {
				dp[i1][i2] = 1 + Math.min(dp[i1-1][i2], dp[i1][i2 - 1], dp[i1-1][i2-1]);
			}
		}
	}

	return dp[s1.length][s2.length];
 }

describe('Edit distance - to find min operations', () => {
	it('s1 = "abdca", s2 = "cbda" ===> 2', () => {
		assert.equal(findMinOperations('abdca', 'cbda'), 2);
	});

	it('s1 = "abdca", s2 = "cbda" ===> 2', () => {
		assert.equal(findMinOperationsBottom('abdca', 'cbda'), 2);
	});
})