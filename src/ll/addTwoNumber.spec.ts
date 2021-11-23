import {assert} from 'chai';
import {ListNode} from './listNode';


function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
	if(l1 === null && l2 === null) {
		return null;
	}
	if(l2 === null) {
		return l1;
	}
	if(l1 === null) {
		return l2;
	}

	let sentinel = new ListNode(0); //sentinel node
	let pred: ListNode | null = sentinel;
	let firstNode :ListNode | null = l1;
	let secondNode :ListNode | null = l2;
	let carry = 0;
	while(firstNode !== null || secondNode !== null || carry !== 0) {
		const firstVal = firstNode?.val || 0;
		const secondVal = secondNode?.val || 0;
		const sum = firstVal + secondVal + carry;
		carry = Math.trunc(sum / 10);
		pred.next = new ListNode(Math.trunc(sum % 10));
		pred = pred?.next;
		firstNode = firstNode?.next || null;
		secondNode = secondNode?.next || null;
	}
	
	return sentinel.next;
};


describe('Add Two Numbers ', () => {
	it('l1 = [2,4,3], l2 = [5,6,4] ===> [7,0,8]', () => {
		const l1 = new ListNode(2);
		l1.next = new ListNode(4);
		l1.next.next = new ListNode(3);

		const l2 = new ListNode(5);
		l2.next = new ListNode(6);
		l2.next.next = new ListNode(4);
		const result = addTwoNumbers(l1, l2);
		assert.ok(result !== null);
		assert.ok(result?.val === 7 && 
			result?.next?.val === 0 && 
			result?.next?.next?.val === 8);
	});

	it('l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9] ===> [8,9,9,9,0,0,0,1]', () => {

		const l1 = new ListNode(9);
		l1.next = new ListNode(9);
		l1.next.next = new ListNode(9);
		l1.next.next.next = new ListNode(9);
		l1.next.next.next.next = new ListNode(9);
		l1.next.next.next.next.next = new ListNode(9);
		l1.next.next.next.next.next.next = new ListNode(9);

		const l2 = new ListNode(9);
		l2.next = new ListNode(9);
		l2.next.next = new ListNode(9);
		l2.next.next.next = new ListNode(9);
		const result = addTwoNumbers(l1, l2);
		assert.ok(result !== null);
		assert.ok(result?.val === 8 && 
			result.next?.val === 9 && 
			result.next.next?.val===9 && 
			result.next.next.next?.val===9 && 
			result.next.next.next.next?.val===0 &&
			result.next.next.next.next.next?.val===0 && 
			result.next.next.next.next.next.next?.val===0 && 
			result.next.next.next.next.next.next.next?.val===1)
	});
})