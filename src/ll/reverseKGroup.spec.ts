import {assert} from 'chai';
import {ListNode} from './listNode';

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
	let count = 0;
	let node = head;
	while(count < k) {
		if(node === null) return head;
		node = node.next;
		count+=1;
	}
	let pre: ListNode | null = reverseKGroup(node, k);
	while(count > 0) {
		let next = head!.next;
		head!.next = pre;
		pre = head;
		head = next;
		count --;
	}

	return pre;

};

function getLength(head: ListNode | null): number {
	let len  = 0;
	let node = head;
	while(node !== null) {
		len++;
		node = node.next;
	}
	return len;
}

describe(' Reverse Nodes in k-Group', () => {
	it('head = [1,2,3,4,5], k = 2 ===> [2,1,4,3,5]', () => {
		const head = new ListNode(1);
		head.next = new ListNode(2);
		head.next.next = new ListNode(3);
		head.next.next.next = new ListNode(4);
		head.next.next.next.next = new ListNode(5);

		//expected
		const ehead = new ListNode(2);
		ehead.next = new ListNode(1);
		ehead.next.next = new ListNode(4);
		ehead.next.next.next = new ListNode(3);
		ehead.next.next.next.next = new ListNode(5);

		const result = reverseKGroup(head, 2);

		assert.deepEqual(result, ehead);

	});

	it('head = [1,2,3,4,5], k = 3 ===> [2,1,4,3,5]', () => {
		const head = new ListNode(1);
		head.next = new ListNode(2);
		head.next.next = new ListNode(3);
		head.next.next.next = new ListNode(4);
		head.next.next.next.next = new ListNode(5);

		//expected
		const ehead = new ListNode(3);
		ehead.next = new ListNode(2);
		ehead.next.next = new ListNode(1);
		ehead.next.next.next = new ListNode(4);
		ehead.next.next.next.next = new ListNode(5);

		const result = reverseKGroup(head, 3);
		console.log(result);
		assert.deepEqual(result, ehead);

	});
});