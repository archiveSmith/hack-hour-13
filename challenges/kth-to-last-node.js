/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */
 'use strict';

function Node(val) {
	this.value = val;
	this.next = null;
}

function kthToLastNode(k, head) {

	// Find length
	let curr = head;
	let length = 1;
	while (curr.next) {
		length++;
		curr = curr.next;
	}

	if (k > length) return; // undef if k past length

	// Get kthToLast elem
	curr = head;
	let currCount = 0;
	while (currCount !== length - k && curr.next) {
		currCount++;
		curr = curr.next;
	}

	return curr.value;
}

// const head = new Node(0);
// let prev = head;
// for (let i = 1; i <= 5; i++) {
// 	let node = new Node(i);
// 	prev.next = node;
// 	prev = node;
// }

//  let res = kthToLastNode(1, head);
//  console.log(res)

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
