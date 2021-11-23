import {assert} from 'chai';


function numDecodings(s: string): number {

	const dp: number[] = [];
	for(let i = 0; i <= s.length; i++) {
		dp.push(1);
	}
	for(let i = s.length - 1; i>=0 ; i--) {
		if(s.charAt(i) === '0') {
			dp[i] = 0;
		} else {
			dp[i] = dp[i+1];
		}
		if((i+1) < s.length && (s.charAt(i) === '1' || 
		(s.charAt(i) ==='2' && '0123456'.indexOf(s.charAt(i + 1)) !== -1))) {
			dp[i]+=dp[i+2];
		}
	}
	return dp[0];
};

function numDecodingHelper(s: string, index: number): number {

	if(index >= s.length) {
		return 0;
	}

	if(s.charAt(index) === '0') {
		return 0;
	}
	const num = parseInt(s.charAt(index));
	let res = 0;
	if(num > 0 && num < 10) {
		res =  1;
	}	
	console.log('S1: ', s.charAt(index)+" "+'0123456'.indexOf(s.charAt(index+1)));
	if( (index + 1) < s.length  && 
		(s.charAt(index) === '1' || 
		(s.charAt(index) ==='2' && '0123456'.indexOf(s.charAt(index + 1)) !== -1))
	) {
		console.log('S2: ', s.charAt(index)+" "+s.charAt(index+1));
		res+= numDecodingHelper(s, index + 1);
	}

	return res;
}

describe('Decode Ways', ( ) => {
	it('s = "12" ===> 2', () => {
		const result = numDecodings('12');
		assert.equal(result, 2);
	});

	it('s = "226" ===> 3', () => {
		const result = numDecodings('226');
		assert.equal(result, 3);
	});

	it('s = "27" ===> 1', () => {
		const result = numDecodings('27');
		assert.equal(result, 1);
	});
	it('s = "2101" ===> 1', () => {
		const result = numDecodings('2101');
		assert.equal(result, 1);
	})

});