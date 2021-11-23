import {assert} from 'chai';
import {ListNode} from './listNode';

function detectCycle(head: ListNode | null): ListNode | null {
	const dups = new Map<ListNode | null, number>();
	let current = head;
	let pos = 0;
	while(current !== null) {
		if(dups.has(current.next)) {
			return current.next;
		}
		dups.set(current, pos++);
		current = current.next;
	}

	return null;
};

describe('Linked List Cycle II', () => {
	it('head = [3,2,0,-4], pos = 1 ===> 2', () => {
		const head = new ListNode(3);
		head.next = new ListNode(2);
		head.next.next = new ListNode(0);
		head.next.next.next = new ListNode(-4);
		head.next.next.next.next = head.next;
		//console.log('Head ', JSON.stringify(head));
		const result = detectCycle(head);
		assert.ok(result !== null && result.val === 2);
	})
});