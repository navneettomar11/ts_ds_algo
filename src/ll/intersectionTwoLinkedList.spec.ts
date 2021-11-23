import {assert} from 'chai';
import {ListNode} from './listNode'

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {

	let currA = headA;
	let currB = headB;

	while(currA !== null && currB !== null) {
		//console.log(currA.val, currB.val);
		if(currA === currB) {
			return  currA;
		}
		currA  = currA.next;
		currB = currB.next;
		if(currA === null) {
			currA = headB;
		} else if( currB === null){
			currB = headA;
		}
	}
	return null;
};


describe('Intersection of Two Linked List', () => {
	it('Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3 ===> 8', () => {
		const listA = new ListNode(4);
		listA.next = new ListNode(1);
		listA.next.next = new ListNode(8);
		listA.next.next.next =  new ListNode(4);
		listA.next.next.next.next = new ListNode(5);

		const listB = new ListNode(5);
		listB.next = new ListNode(6);
		listB.next.next = new ListNode(1);
		listB.next.next.next =  new ListNode(8);
		listB.next.next.next.next = new ListNode(4);
		listB.next.next.next.next.next = new ListNode(4);

		const result = getIntersectionNode(listA, listB);
		assert.ok(result !== null && result.val === 8);
	})
});