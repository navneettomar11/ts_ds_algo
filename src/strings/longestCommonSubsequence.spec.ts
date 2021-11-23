import {assert} from 'chai';
import { text } from 'stream/consumers';


function longestCommonSubsequence(text1: string, text2: string): number {
	const dp: number[][] = [];
	for(let i = 0; i <= text1.length; i++) {
		dp[i] = [];
		for(let j = 0; j <= text2.length; j++) {
			dp[i].push(0);
		}
	}
	for(let i = 1; i <= text1.length; i++) {
		for(let j = 1; j <= text2.length; j++) {
			if(text1.charAt(i-1)=== text2.charAt(j-1)) {
				dp[i][j] = 1 + dp[i-1][j-1];
			} else {
				dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
			}
		}
	}
	return dp[text1.length][text2.length];
};

describe('Longest Common Subsequence', () => {
	it('text1 = "abcde", text2 = "ace" ===> 3', () => {
		const result = longestCommonSubsequence('abcde', 'ace');
		assert.equal(result, 3);
	});
});