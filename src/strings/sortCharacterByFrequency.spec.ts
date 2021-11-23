import {assert} from 'chai';

function frequencySort(s: string): string {
	const freqMap = new Map<number, number>();
	let result: string = '';
	for(let i = 0; i < s.length; i++) {
		freqMap.set(s.charCodeAt(i), (freqMap.get(s.charCodeAt(i)) || 0) + 1);
	}

	const sortedKeys: number[] = [];
	freqMap.forEach((value, key) => {
		sortedKeys.push(key);
	})
	sortedKeys.sort((a, b) => {
		const valA = freqMap.get(a) || 0;
		const valB = freqMap.get(b) || 0;
		if(valA !== valB) {
			return valB - valA;
		}
		return a - b;
	});
	
	//console.log(freqMap, sortedKeys);
	for(let key of sortedKeys) {
		const count = freqMap.get(key) || 0;
		//console.log((new Array<string>(count)).fill(String.fromCharCode(key)));
		result+= (new Array<string>(count)).fill(String.fromCharCode(key)).join('');
	}
	//console.log('Result ', result);
	return result;
};

describe('Sort Characters By Frequency', () => {
	it('s = "tree"  ===> "eert"', () => {
		const result = frequencySort('tree');
		assert.equal(result, 'eert');
	});

	it('s = "cccaaa"  ===> "aaaccc"', () => {
		const result = frequencySort('cccaaa');
		assert.equal(result, 'aaaccc');
	});

	it('s = "Aabb"  ===> "bbAa"', () => {
		const result = frequencySort('Aabb');
		assert.equal(result, 'bbAa');
	});
})

