import {expect} from 'chai';

function squareRoot(n: number): number {

	let low = 0;
	let high = n;
	let res = -1;
	while(low <= high) {
		const mid = low + Math.trunc((high - low)/2);
		if(mid * mid <= n) {
			res = mid;
			low = mid + 1;
		} else {
			high = mid - 1;
		}
	}
	return res;
}

function isPrefectSquare(n: number): boolean {
	let low = 0;
	let high = n;
	while(low <= high) {
		const mid = low + Math.trunc((high - low)/2);
		const sqr = mid * mid;
		if(sqr == n) {
			return true;
		} else if (sqr < n) {
			low = mid + 1;
		} else {
			high = mid - 1;
		}
	}
	return false;

}

describe('square root', () => {
	it('n = 16', () => {
		const result = squareRoot(16);
		expect(result).to.equal(4);	
	});

	it('n = 8', () => {
		const result = squareRoot(8);
		expect(result).to.equal(2);	
	});

	it('n = 100000', () => {
		const result = squareRoot(100000);
		expect(result).to.equal(316);	
	});
});

describe('is prefect square root', () => {
	it('n = 16 => true', () => {
		const result = isPrefectSquare(16);
		expect(result).to.equal(true);
	});

	it('n = 8 => false', () => {
		const result = isPrefectSquare(8);
		expect(result).to.equal(false);
	});
});