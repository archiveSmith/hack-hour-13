/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedList(head) {
	if (!head) return false;
	if (!head.next) return head;

	let prev = new Node(head.value); 
	head = head.next;

	for (let i = head; i; i = i.next) {
		let newHead = new Node(i.value);
		newHead.next = prev;
		prev = newHead;
	}

	return prev;
}

// var a = new Node(5);
// var b = new Node(6);
// a.next = b;
// var c = new Node(7);
// b.next = c;
// var d = new Node(8);
// c.next = d;

// console.log(a);

// reverseLinkedList(a);

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
