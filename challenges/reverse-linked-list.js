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
	let temp = null;
	let prev = null;
	let node = head;
	if (node === null) return null;
	while (node && node.next !== null && node.next !== node) {
		temp = node.next; // store node.next in temp
		node.next = prev; // make node.next equal to prev
		prev = node; // set new prev to the current node
		node = temp; // increment curret node (i.e., set it to temp, which is node.next)
	}
	node.next = prev;
	return node;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
