import {assert} from 'chai';

function nthUglyNumber(n: number): number {
	
	const uglyNumber: number[] = new Array<number>(n).fill(0);

	uglyNumber[0] = 1;
	let nexMultipleOfTwo = 2;
	let nexMultipleOfThree = 3;
	let nexMultipleOfFive = 5;

	let i2 = 0;
	let i3 = 0;
	let i5 = 0;

	for(let i = 1; i <n; i++) {
		uglyNumber[i] = Math.min(nexMultipleOfTwo, nexMultipleOfThree, nexMultipleOfFive);
		if(uglyNumber[i] === nexMultipleOfTwo) {
			i2+=1;
			nexMultipleOfTwo = uglyNumber[i2]*2;
		}  
		if(uglyNumber[i] === nexMultipleOfThree) {
			i3+=1;
			nexMultipleOfThree = uglyNumber[i3]*3;
		} 
		if(uglyNumber[i] === nexMultipleOfFive) {
			i5+=1;
			nexMultipleOfFive = uglyNumber[i5]*5;
		}
	}

	return uglyNumber[n-1];
};


describe('Ugly Number', () => {
	it('n= 10 ===> 12', () => {
		assert.equal(nthUglyNumber(10), 12);
	});
	it('n= 1 ===> 1', () => {
		assert.equal(nthUglyNumber(1), 1);
	})
})