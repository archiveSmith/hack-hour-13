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

function reverseLinkedList(n1) {
	var currentNode = n1;
	let collection = [];
	while(currentNode){
		collection.unshift(currentNode.value)
		currentNode = currentNode.next;
	}
	var backwards = new Node(collection[0]);
	var pointer = backwards;
	for(var i=1; i<collection.length; i += 1){
		pointer.next = new Node(collection[i]);
		pointer = pointer.next;
	}
	// return collection;
	return backwards;
	
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
