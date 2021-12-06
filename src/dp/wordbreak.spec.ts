import {assert} from 'chai';


function wordBreakBruteForce(s: string, wordDict: string[]): boolean {
	const wordBreakSet = new Set(wordDict);
	return wordBreakHelper(s, wordBreakSet, 0);
};

function wordBreakHelper(s: string, wordDictSet: Set<string>, start: number): boolean {

	if(start === s.length) {
		return true;
	}

	for(let end = start+1; end <= s.length; end++) {
		//console.log('String ', s.substring(start, end), '====', wordDictSet.has(s.substring(start, end)));
		if(wordDictSet.has(s.substring(start, end)) && 
		wordBreakHelper(s, wordDictSet, end)) {
			return true;
			
		}
	}
	return false;
}

function wordBreakMemoization(s:string, wordDict: string[]) {
	const wordBreakSet = new Set(wordDict);
	const memo: boolean[] =  [];
	for(let i = 0; i < s.length; i++) { 
		memo.push(false);
	}
	return wordBreakMemoizationHelper(memo, s, wordBreakSet, 0);
}

function wordBreakMemoizationHelper(memo: boolean[], s: string, wordDictSet: Set<string>, start: number): boolean {
	if(start === s.length) {
		memo[start] = true;
		return memo[start];
	}
	for(let end = start + 1; end <= s.length; end++) {
		//console.log('String ', s.substring(start, end), '====', wordDictSet.has(s.substring(start, end)), 'memo ', memo);
		if(wordDictSet.has(s.substring(start, end)) && 
		wordBreakMemoizationHelper(memo, s, wordDictSet, end)) {
			memo[start] = true;
			//console.log(memo, start);
			return memo[start];
		}
	}
	memo[start] = false;
	return memo[start];
}


function wordBreakTabulation(s:string, wordDict: string[]): boolean {
	const wordBreakSet = new Set(wordDict);
	const dp: boolean[] =  [];
	for(let i = 0; i <= s.length; i++) { 
		dp.push(false);
	}
	dp[0] = true;
	for(let i = 0 ; i <=s.length; i++) {
		for(let j = 0; j < i; j++) {
			if(dp[j] && wordBreakSet.has(s.substring(j, i))) {
				dp[i] = true;
				break;
			}
		}
	}

	return dp[s.length];
}

describe('Word Break', () => {
	describe('Brute Force ', () => {
		it('s = "leetcode" , wordDict = ["leet","code"] ===> true', () => {
			assert.isTrue(wordBreakBruteForce("leetcode", ["leet", "code"]));
		});
		it('s = "applepenapple" , wordDict = ["apple","pen"] ===> true', () => {
			assert.isTrue(wordBreakBruteForce("applepenapple", ["apple", "pen"]));
		});
		it('s = "catsandog" , wordDict = ["cats","dog","sand","and","cat"] ===> false', () => {
			assert.isFalse(wordBreakBruteForce("catsandog", ["cats","dog","sand","and","cat"]));
		});
	});
	describe('Memoization', () => {
		it('s = "leetcode" , wordDict = ["leet","code"] ===> true', () => {
			assert.isTrue(wordBreakMemoization("leetcode", ["leet", "code"]));
		});
		it('s = "applepenapple" , wordDict = ["apple","pen"] ===> true', () => {
			assert.isTrue(wordBreakMemoization("applepenapple", ["apple", "pen"]));
		});
		it('s = "catsandog" , wordDict = ["cats","dog","sand","and","cat"] ===> false', () => {
			assert.isFalse(wordBreakMemoization("catsandog", ["cats","dog","sand","and","cat"]));
		});
	});
	describe('Tabulation', () => {
		it('s = "leetcode" , wordDict = ["leet","code"] ===> true', () => {
			assert.isTrue(wordBreakTabulation("leetcode", ["leet", "code"]));
		});
		it('s = "applepenapple" , wordDict = ["apple","pen"] ===> true', () => {
			assert.isTrue(wordBreakTabulation("applepenapple", ["apple", "pen"]));
		});
		it('s = "catsandog" , wordDict = ["cats","dog","sand","and","cat"] ===> false', () => {
			assert.isFalse(wordBreakTabulation("catsandog", ["cats","dog","sand","and","cat"]));
		});
	})
})