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
 // create a pointer to the head
  let currNode = head;
  // have prevNode to null from the head of the current LinkedList
  // so that way we can start our tail of our new LinkedList
  let prevNode = null;
  // have a nextNode so we can move up the LinkedList and
  // use the following node to assign to t
  let nextNode = null;

  // iterate for as long as currNode is not null
  while (currNode) {
   // have the next node point to the next of the currNode
    nextNode = currNode.next;
    currNode.next = prevNode;
    prevNode = currNode;
    currNode = nextNode;
  }

  return prevNode;
}


 let link = new Node(5);
 link.next = new Node(6);
 link.next.next = new Node(8);
 link.next.next.next = new Node(20);

 reverseLinkedList(link);

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
