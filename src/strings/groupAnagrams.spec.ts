import {assert} from 'chai';

function groupAnagrams(strs: string[]): string[][] {
	const cache = new Map<string, string[]>();
	strs.sort();
	for(let s of strs) {
		const agr = anagram(s);
		let list = cache.get(agr);
		if(!list) {
			list = [s];
			cache.set(agr, list);
		} else {
			list.push(s);
		}
	}
	
	const result: string[][] = [];
	cache.forEach(val => result.push(val));
	result.sort((a, b) => a.length - b.length);
	return result;

};

function anagram(s: string): string {
	const char = Array.from(s);
	char.sort();
	return char.join('');
}


describe('Group Anagrams', () => {

	it('strs = ["eat","tea","tan","ate","nat","bat"] ===> [["bat"],["nat","tan"],["ate","eat","tea"]]', () => {
		const result = groupAnagrams(["eat","tea","tan","ate","nat","bat"]);
		assert.deepEqual(result, [["bat"],["nat","tan"],["ate","eat","tea"]]);
	});
});