/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
	let l3 = new Node;

while (l1.next) {

	let temp1 = l1.next;

	l3.next = l1;

	let temp2 = l2.next;

	l3.next = l2;

	l3.next = temp1;

	l3.next = temp2;
}

	//I have no idea
};

module.exports = {Node: Node, zip: zip};

// and how to test?
