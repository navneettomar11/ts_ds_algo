import {assert} from 'chai';

function wordPattern(pattern: string, s: string): boolean {

	if(!pattern || !s || pattern.length === 0 || s.length === 0) {
		return false;
	}
	const splitS = s.split(' ');

	if(pattern.length !== splitS.length) {
		return false;
	}

	
	const mapOne = new Map<string, string>();
	const mapTwo = new Map<string, string>();
	for(let i = 0, j=0 ; i < pattern.length; j++, i++) {
		let ch = pattern.charAt(i);
		let word = splitS[i];
		if(!mapOne.has(word) && !mapTwo.has(ch)) {
			mapOne.set(word,ch);
			mapTwo.set(ch, word);
		} else if(mapTwo.has(ch) && word !== mapTwo.get(ch)) {
			return false;
		} else if(mapOne.has(word) && mapOne.get(word) !== ch) {
			return false;
		}
		
	}
	return true;
};

describe('Word Pattern', () => {

	it('Input: pattern = "abba", s = "dog cat cat dog" ===> true', () => {
		assert.isTrue(wordPattern('abba', 'dog cat cat dog'));
	});

	it('Input: pattern = "abba", s = "dog cat cat fish" ===> false', () => {
		assert.isFalse(wordPattern('abba', 'dog cat cat fish'));
	});

	it('Input: pattern = "aaaa", s = "dog cat cat dog" ===> false', () => {
		assert.isFalse(wordPattern('aaaa', 'dog cat cat dog'));
	});

	it('Input: pattern = "abba", s = "dog dog dog dog" ===> false', () => {
		assert.isFalse(wordPattern('abba', 'dog dog dog dog'));
	});
});