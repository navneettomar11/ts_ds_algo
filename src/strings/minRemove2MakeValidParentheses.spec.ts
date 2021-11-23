import {assert} from 'chai';

function minRemoveToMakeValid(s: string): string {
	const paraStack: number[] = [];
	for(let i = 0; i < s.length; i++) {
		if(s.charAt(i) === '(' || s.charAt(i) ===')') {
			if(paraStack.length >  0 && s.charAt(paraStack[paraStack.length - 1]) === '(' && s.charAt(i) === ')') {
				paraStack.pop();	
			} else {
				paraStack.push(i);
			}
		}
	}
	//console.log(paraStack);
	while(paraStack.length !== 0) {
		let paraIdx = paraStack.pop();
		s = s.substring(0, paraIdx) + s.substring( (paraIdx || 0) + 1);
	}
	//console.log(s);
	return s;
};


describe('Minimum Remove to Make Valid Parentheses', () => {
	it('s = "lee(t(c)o)de)" ===> "lee(t(c)o)de"', () => {
		const result = minRemoveToMakeValid('lee(t(c)o)de)');
		assert.ok(result === 'lee(t(c)o)de' || result === 'lee(t(c)ode)');
	});
	it('s = "(a(b(c)d)" ===> "a(b(c)d)"', () => {
		const result = minRemoveToMakeValid('(a(b(c)d)');
		assert.ok(result === 'a(b(c)d)' || result === '(a(bc)d)');
	});
	it('"))((" ==> ""', () =>{
		const result = minRemoveToMakeValid('))((');
		assert.equal(result, "");
	});
	it('s = "a)b(c)d" ===> "ab(c)d"', () => {
		const result = minRemoveToMakeValid('a)b(c)d');
		assert.ok(result === 'ab(c)d');
	});
})