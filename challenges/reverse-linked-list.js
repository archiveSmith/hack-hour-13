/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

 const list = new Node(1);
 list.next = new Node(2);
 list.next.next = new Node(3);
 list.next.next.next = new Node(4);

 function Node(value) {
     this.value = value;
     this.next = null;
 }

 function reverseLinkedList(head) {
   let currNode = head;
   let prevNode;
   let nextNode;

   while (currNode !== null) {
     nextNode = currNode.next;
     currNode.next = prevNode;
     prevNode = currNode;
     currNode = nextNode;
   }

   head = prevNode;
   return head;
 }


module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
