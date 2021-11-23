import {expect} from 'chai';

function addStrings(num1: string, num2: string): string {
   if(!num1 && !num2) {
		return '';
   }else if(!num1) {
	   return num2;
   } else if(!num2) {
	   return num1;
   }
   let maxLen = Math.max(num1.length, num2.length);
   let i1 = num1.length - 1;
   let i2 = num2.length - 1;
   let i = 0;
   let carry = 0;
   let result = '';
   while(i < maxLen) {
	   let first = i1 >= 0 ? parseInt(num1.charAt(i1)) : 0;
	   let second = i2 >=0 ? parseInt(num2.charAt(i2)) : 0;
	   let sum = first + second + carry;
		result+='' + (sum % 10);
		carry = Math.trunc(sum / 10);
	   i1--;
	   i2--;
	   i++;
   }
   if(carry > 0) {
	    result+=''+carry;
   }

   result = result.split('').reverse().join('');
   return result;
 
   
  
}

describe('add strings', () => {

	it('num1 = "11", num2 = "123 ===> "134"', () => {
		const result = addStrings("11", "123");
		expect(result).to.equal("134");
	});

	it('num1 = "456", num2 = "77" ===> "533"', () => {
		const result = addStrings("456", "77");
		expect(result).to.equal("533");
	});

	it('num1 = "0", num2 = "0" ===> "0"', () => {
		const result = addStrings("0", "0");
		expect(result).to.equal("0");
	});

	it('num1 = "1", num2 = "9" ===> "10"', () => {
		const result = addStrings("1", "9");
		expect(result).to.equal("10");
	});

	it('num1 = "9333852702227987", num2 = "85731737104263" ===> "9419584439332250"', () => {
		const result = addStrings("9333852702227987", "85731737104263");
		expect(result).to.equal("9419584439332250");
	});
});