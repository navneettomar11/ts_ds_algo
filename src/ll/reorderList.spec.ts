import {assert} from 'chai';
import {ListNode, createLinkedList} from './listNode';

function reorderList(head: ListNode | null): void {
	let slow = head;
	let fast = head?.next;
	
	while(fast !== null && fast?.next !== null) {
		slow = slow!.next;
		fast = fast?.next.next;
	}
	let second: ListNode | null = slow!.next;
	let prev: ListNode | null = null;
	slow!.next = null;
	while(second !== null) {
		let temp = second?.next;
		second!.next = prev;
		prev = second!;
		second = temp;
	}
	let first = head;
	second = prev;
	while(second !== null) {
		let temp1 = first?.next;
		let temp2 = second?.next;
		first!.next = second;
		second!.next = temp1 || null;
		first = temp1 || null;
		second = temp2;
	}

};


describe('Reorder List', () => {
	it('[1,2,3,4] ===> [1,4,2,3]', () => {
		const head = createLinkedList([1,2,3,4]);
		const result = reorderList(head);
		assert.isNotNull(result);
	})
})