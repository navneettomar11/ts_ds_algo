import {assert} from 'chai';

function findStringInterleaving(m: string, n: string, p: string): boolean {
	return findSIHelper(m,n,p, 0,0,0);
}

function findSIHelper(m: string, n: string, p: string, mIdx: number, nIdx: number, pIdx: number): boolean {
	if(mIdx === m.length && nIdx === n.length && pIdx === p.length) {
		return true;
	}
	if(pIdx === p.length) {
		return false;
	}
	let b1 = false;
	let b2 = false;
	if(mIdx < m.length && m.charAt(mIdx) === p.charAt(pIdx)) {
		b1 = findSIHelper(m,n,p, mIdx+1, nIdx, pIdx+1);
	}
	if(nIdx < n.length && n.charAt(nIdx) === p.charAt(pIdx)) {
		b2 = findSIHelper(m,n,p, mIdx, nIdx + 1, pIdx+1);
	}

	return b1 || b2;
}



describe('String interleaving ', () => {
	it('"abd", "cef", "abcdef"   ===> True', () =>{
		assert.isTrue(findStringInterleaving("abd", "cef", "abcdef"));
	});	
})