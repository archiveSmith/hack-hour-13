/*
Create a doubly linked list with an add and remove method
 */

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
   const currNode = new Node(val);
   if (this.head === null) {
     this.head = currNode;
     this.tail = currNode;
   } else {
     currNode.prev = this.tail;
     this.tail.next = currNode;
     this.tail = currNode;
   }
 };

 /*
 Removes the first node with the inputted value
  */
 LinkedList.prototype.remove = function(val) {
   let curr = this.head;
   while (curr) {
     if (curr.val === val) {
       curr.prev.next = curr.next;
       curr.next.prev = curr.prev;
     }
     curr = curr.next;
   }
 };

module.exports = LinkedList;
