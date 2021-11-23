import {assert} from 'chai';
import {ListNode} from './listNode';

function swapPairs(head: ListNode | null): ListNode | null {
	if(head === null) {
		return null;
	}

	let temp  = head;
	head = head.next;
	temp.next = swapPairs(head!.next);
	head!.next = temp || null;
	return head;
};


describe('Swap Nodes In Pair', () => {

	it('head = [1,2,3,4] ===> [2,1,4,3]', () => {
		const head = new ListNode(1);
		head.next = new ListNode(2);
		head.next.next = new ListNode(3);
		head.next.next.next = new ListNode(4);

		const expected = new ListNode(2);
		expected.next = new ListNode(1);
		expected.next.next = new ListNode(4);
		expected.next.next.next = new ListNode(3);

		const result = swapPairs(head);
		assert.deepEqual(result, expected);
	});

	it('head = [] ===> []', () => {
		const result = swapPairs(null);
		assert.isNull(result);
	});
});