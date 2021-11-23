import {assert} from 'chai';

function partitionLabels(s: string): number[] {
	const res: number[] = [];
	const cache = new Map<string, number>();
	for(let i = 0; i < s.length; i++) {
		cache.set(s.charAt(i), i);
	}
	let l = 0;
	let r = 0;
	let index =0;
	while(index < s.length) {
		const cur = s.charAt(index);
		r = Math.max(r, cache.get(cur) || 0);
		if(r === index) {
			res.push((r - l + 1));
			r++;
			l = r;
		}
		index++;
	}

	return res;
};

describe('Partition Label', () => {
	it('s = "ababcbacadefegdehijhklij" ===> [9,7,8]', () => {
		const result = partitionLabels('ababcbacadefegdehijhklij');
		assert.deepEqual(result, [ 9, 7, 8 ]);
	});

	it('s = eccbbbbdec ===> [10]', () => {
		const result = partitionLabels('eccbbbbdec');
		assert.deepEqual(result, [ 10 ]);
	});
})
