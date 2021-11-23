import {assert} from 'chai';

function findRepeatedDnaSequences(s: string): string[] {
	const dups = new Set<string>();
	const result: string[] = [];
	for(let i = 0; i + 9  < s.length; i++) {
		const substr = s.substring(i, i+10);
		if(dups.has(substr) && result.indexOf(substr) === -1) {
			result.push(substr);
		} else 
			dups.add(substr);
	}

	return result;
};

describe('Repeat DNA Sequences', () => {
	it('s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT" ==> ["AAAAACCCCC","CCCCCAAAAA"]', () => {
		const result = findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT");
		assert.deepEqual(result, ["AAAAACCCCC","CCCCCAAAAA"]);
	});
})