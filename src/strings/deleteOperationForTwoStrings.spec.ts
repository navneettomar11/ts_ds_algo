import {assert} from 'chai';

function minDistance(word1: string, word2: string): number {
	const common = minDistanceTabulation(word1, word2);
	return (word1.length + word2.length - 2 * common);
};

function minDistanceHelper(word1: string, word2: string, i1: number, i2: number): number {
	if(i1 >= word1.length || i2 >= word2.length) {
		return 0;
	}
	if(word1.charAt(i1) === word2.charAt(i2)) {
		return 1 + minDistanceHelper(word1, word2, i1+1, i2+1);
	}
	const c1 = minDistanceHelper(word1, word2, i1, i2+1);
	const c2 = minDistanceHelper(word1, word2, i1+1, i2);
	console.log(i1, i2, c1, c2);
	return Math.max(c1, c2);
}

function minDistanceTabulation(word1: string, word2: string): number {
	const dp: number[][] = [];
	for(let i = 0; i <= word1.length; i++) {
		dp.push([]);
	}
	dp.forEach(arr => {
		for(let i = 0; i<=word2.length; i++) {
			arr.push(0);
		}
	});

  	for(let i = 0; i <= word1.length; i++) {
		for(let j = 0; j <=word2.length; j++) {
            if(i === 0 || j === 0) {
                dp[i][j] = i + j;
            }else if(word1.charAt(i-1) === word2.charAt(j-1)) {
			//	console.log('Word 1 char At === word2 char J ', i, j);
				dp[i][j] = dp[i-1][j-1];
			} else {
                //console.log('Min ', dp[i-1][j], dp[i][j-1], 'I ', i, 'J ', j)
                dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1]);
            }
		}
       // console.log(dp[i], ' --- ', i );
	}
    //console.log(dp);
	return dp[word1.length][word2.length];
}
 

describe('Delete Operation for Two Strings', () => {
	it('word1 = "sea", word2 = "eat" ===> 2', () => {
		const result = minDistance('sea', 'eat');
		assert.equal(result, 2);
	});
	it('word1 = "leetcode", word2 = "etco" ===> 4', () => {
		const result = minDistance('leetcode', 'etco');
		assert.equal(result, 4);
	});
	it('word1 = "dinitrophenylhydrazine", word2= "acetylphenylhydrazine" ===> ',() => {
		const result = minDistance("dinitrophenylhydrazine", "acetylphenylhydrazine");
		console.log(result);

	})
})