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
	if (head === undefined) return null;
	//set current node to head
	let curr = head;
	//make array to stash values of list as we iterate through
	let stash = [];

	//iterate through list. Push each value into array.
	while (curr.next) {
		stash.push(curr.value);
		curr = curr.next;
	}
	stash.push(curr.value);

	//make new list
	let newHead = new Node(stash.pop());
	//keep track of head
	let origin = newHead;
	//loop through stashed array and created new linked node for each value in stashed array starting at end.
	let len = stash.length;
	for (let i = 0; i < len; i++) {
		newHead.next = new Node(stash.pop());
		newHead = newHead.next;
  }
	return origin;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};

//test:

// let test = new Node(1);
// let start = test;

// for (let i = 2; i < 11; i++) {
// 	test.next = new Node(i);
// 	test = test.next;
// }
// console.log('Reversing:')

// test = reverseLinkedList(start);

// while (test.next) {
// 	console.log(test.value);
// 	test = test.next;
// }

// console.log (test.value);



