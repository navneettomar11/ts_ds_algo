import{assert} from 'chai';

class MinStack {
	elements: number[];
	
    constructor() {
		this.elements = [];
    }

    push(val: number): void {
		this.elements.push(val);
	}

    pop(): void {
		this.elements.pop();
    }

    top(): number {
		if(this.elements.length === 0) {
			return -1;
		}
		return this.elements[this.elements.length - 1];
    }

    getMin(): number {
		let min = this.top();
		this.elements.forEach(elem => {
			min = Math.min(elem, min);
		});
		return min || -1;
    }
}


describe('Min stack', () => {
	it(`["MinStack","push","push","push","getMin","pop","top","getMin"]
	[[],[-2],[0],[-3],[],[],[],[]] ===> [null,null,null,null,-3,null,0,-2]`, () => {
		const minStack = new MinStack();
		minStack.push(-2);
		minStack.push(0);
		minStack.push(-3);
		assert.equal(minStack.getMin(), -3);
		minStack.pop();
		assert.equal(minStack.top(), 0);
		assert.equal(minStack.getMin(), -2);
	
	});
});