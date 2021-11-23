import {assert} from 'chai';
import {ListNode} from './listNode';

class MyLinkedList {
	elements: number[];

    constructor() {
		this.elements = [];
    }

    get(index: number): number {
		if(index >= this.elements.length || !this.elements[index]) {
            return -1;
        }
		return this.elements[index] ;
    }

    addAtHead(val: number): void {
		this.elements = [val].concat(this.elements);
    }

    addAtTail(val: number): void {
		this.elements.push(val);
    }

    addAtIndex(index: number, val: number): void {
		const temp = [];
        let j = 0;
        for(let i = 0; i< index; i++) {
            temp[j++] = this.elements[i];
        }
        temp[j++] = val;
        for(let i = index ; i < this.elements.length; i++) {
            temp[j++] = this.elements[i];
        }
		this.elements = [...temp];
     }

    deleteAtIndex(index: number): void {
		console.log('Before Delete  ',this.elements);
		this.elements.splice(index, 1);
		console.log('Delete  ',this.elements);
    }
}

describe('My LinkedList', () => {
	it(`["MyLinkedList", "addAtHead", "addAtTail", "addAtIndex", "get", "deleteAtIndex", "get"]
	[[], [1], [3], [1, 2], [1], [1], [1]] ===> [null, null, null, null, 2, null, 3]`, () => {
		const myLinkedList = new MyLinkedList();
		myLinkedList.addAtHead(1);
		myLinkedList.addAtTail(3);
		myLinkedList.addAtIndex(1,2);
		assert.equal(myLinkedList.get(1), 2);
		myLinkedList.deleteAtIndex(1);
		assert.equal(myLinkedList.get(1), 3);
	});
	it(`["MyLinkedList","addAtHead","addAtHead","addAtHead","addAtIndex","deleteAtIndex",
	"addAtHead","addAtTail","get","addAtHead","addAtIndex","addAtHead"]
	[[],[7],[2],[1],[3,0],[2],[6],[4],[4],[4],[5,0],[6]] ===> 
	[null,null,null,null,null,null,null,null,4,null,null,null]`, () => {
		const myLinkedList = new MyLinkedList();
		myLinkedList.addAtHead(7);
		myLinkedList.addAtHead(2);
		myLinkedList.addAtHead(1);
		myLinkedList.addAtIndex(3,0);
		myLinkedList.deleteAtIndex(2);
		myLinkedList.addAtHead(6);
		myLinkedList.addAtTail(4);
		assert.equal(myLinkedList.get(4),4);
		myLinkedList.addAtHead(4);
		myLinkedList.addAtIndex(5,0);
		myLinkedList.addAtHead(6);
	})
})