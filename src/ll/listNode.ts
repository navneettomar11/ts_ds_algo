export class ListNode {
	val: number
	next: ListNode | null
	constructor(val?: number, next?: ListNode | null) {
		this.val = (val===undefined ? 0 : val)
		this.next = (next===undefined ? null : next)
	}
}

export function createLinkedList(nums: number[]): ListNode {
	const head = new ListNode(nums[0]);
	let current = head;
	for(let i = 1; i< nums.length; i++) {
		current.next = new ListNode(nums[i]);
		current = current.next;
	}
	return head;
}