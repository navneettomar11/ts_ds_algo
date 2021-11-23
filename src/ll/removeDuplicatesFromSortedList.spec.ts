import {expect} from 'chai';
import {ListNode} from './listNode';


function deleteDuplicates(head: ListNode | null): ListNode | null {
	if(!head) {
		return null;
	}
	let sentinel = new ListNode(0, head); //sentinel node
	let pred: ListNode | null = sentinel;

	while(head !== null) {
		if(head.next != null && head.val === head.next.val) {
			while(head.next != null && head.val === head.next.val) {
				head = head?.next;
			}
			pred!.next = head.next;
		} else {
			pred = pred!.next ;
		}
		head = head.next;
	}
	return sentinel.next;
};

function convertLinkedListToArray(head: ListNode | null) {
	const values: number[] = [];
	while(head !== null) {
		values.push(head.val);
		head = head.next;
	}
	return values;
}

describe('remove duplicate from sorted linked list', () => {
	it('[1,2,3,3,4,4,5] ==> [1,2,5]', () => {
		const head = new ListNode(1);
		head.next = new ListNode(2);
		head.next.next = new ListNode(3);
		head.next.next.next = new ListNode(3);
		head.next.next.next.next = new ListNode(4);
		head.next.next.next.next.next = new ListNode(4);
		head.next.next.next.next.next.next = new ListNode(5);
		const result = deleteDuplicates(head);
		expect(convertLinkedListToArray(result)).to.deep.equal([1,2,5]);
	});

});