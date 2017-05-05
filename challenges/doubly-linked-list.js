/*
Create a doubly linked list with an add and remove method
 */

function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

/*
Adds a node to the end of the list
 */
 LinkedList.prototype.add = function(val) {
   // reassign the tail of the LL to a newly created node
   // point the previous tail's next to the new node and assigning the previous
   // of the new node to the old tail
   const node = new Node(val);
   this.tail.next = node;
   this.tail.next.prev = this.tail;
   this.tail = node;
 };

/*
Removes the first node with the inputted value
 */
 LinkedList.prototype.remove = function(val) {
   // assign a currNode to the head of the LL for traversing through the LL
   let currNode = this.head;
   while (currNode) {
     // if the currNode's value is equal to the value to be removed
     // assign the currNode's previous node's next to the currNode's next
     // and then assign the currNode's next's previous to the currNode's previous
     if (currNode.val === val) {
       currNode.prev.next = currNode.next;
       currNode.next.prev = currNode.prev;
       break;
     }
     currNode = currNode.next;
   }
 };

module.exports = LinkedList;
