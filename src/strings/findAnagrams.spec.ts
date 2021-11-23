import {assert} from 'chai';

function findAnagrams(s: string, p: string): number[] {
	const result: number[] = [];
	if(!s || s.length === 0 || !p || p.length === 0) {
		return result;
	}
	const lenS = s.length;
	const lenP = p.length;
	const countP = new Array<number>(26);
	const countS = new Array<number>(26);
	countP.fill(0);
	countS.fill(0);
	for(let i = 0; i < lenP; i++) {
		countP[p.charCodeAt(i) - 97]++;
	}
	for(let i = 0; i < lenP; i++) {
		countS[s.charCodeAt(i) - 97]++;
	}
	let i = 0;
	let j = lenP - 1;
	while(j < lenS) {
		
		if( countS.every((value, index) => value === countP[index])){
			result.push(i);
		}
		countS[s.charCodeAt(i) - 97]--;
		j++;
		i++;
		if(j < lenS) {
			countS[s.charCodeAt(j) - 97]++;
		}
	}
	return result;	
};

describe('Find Anagrams', () => {
	it('s = "abab", p = "ab" ===> [0,1,2]', () => {
		const result = findAnagrams('abab', 'ab');
		assert.deepEqual(result, [0,1,2]);
	});

	it('s = "cbaebabacd", p = "abc" ===> [0,6]', () => {
		const result = findAnagrams('cbaebabacd', 'abc');
		assert.deepEqual(result, [0,6]);
	});

	
});