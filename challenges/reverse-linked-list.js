/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 */

function Node(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedList(head) {
  if (!head) return null;

	let curr = head, nextNode, previous = null;
	
	while(curr) {
	  //hold on to rest of list by copying next pointer of current node
	  let nextNode = curr.next;
	  
	  //take next pointer of current node and point to previous (which is null at beginning (or new end) of list)
	  curr.next = previous;
	  
	  //step through list:
	  //make the previous node into the curr one
	  previous = curr;
	  //make the curr node into the nextNode
	  curr = nextNode;
	}
	// we return previous because when we are on last element of list, curr has just been set to nextNode which is null at this point.
	return previous;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};


//test:

// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');

// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;

// let test = reverseLinkedList(a);

// function printList(head) {
//     let curr = head;
//     while (curr) {
//         console.log(curr.value);
//         curr = curr.next;
//     }
// }

// printList(test);



//This solution pushes into an array and then builds a new linked list:
// function reverseLinkedList(head) {
// 	if (!head) return null;
// 	//set current node to head
// 	let curr = head;
// 	//make array to stash values of list as we iterate through
// 	let stash = [];

// 	//iterate through list. Push each value into array.
// 	while (curr.next) {
// 		stash.push(curr.value);
// 		curr = curr.next;
// 	}
// 	stash.push(curr.value);

// 	//make new list
// 	let newHead = new Node(stash.pop());
// 	//keep track of head
// 	let origin = newHead;
// 	//loop through stashed array and created new linked node for each value in stashed array starting at end.
// 	let len = stash.length;
// 	for (let i = 0; i < len; i++) {
// 		newHead.next = new Node(stash.pop());
// 		newHead = newHead.next;
//   }
// 	return origin;
// }

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