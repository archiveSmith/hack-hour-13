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

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
//calcualte the length of the linked list
//the kth to the last node will be the length - k + 1
	var theLength = 0;
	var theLocation;
	var position=0;
	var currentNode = head;
	while(currentNode){
		theLength++;
		currentNode = currentNode.next;
	}
	theLocation = theLength - k +1;
	
	currentNode = head;
	while(currentNode){
		position++;
		if(position === theLocation){
			return currentNode.value;
		}
		currentNode = currentNode.next;
	}
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
