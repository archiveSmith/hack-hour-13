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
  while (this.next) {
    if (this.next.next === null) {
      const newNode = new Node(val);
      this.next.next = newNode;
      this.tail = newNode;
      newNode.prev = this.next;
    }
    this.next = this.next.next;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  if (this.val === val) this.prev.next = this.prev.next.next;
  while (this.next) {
    
  }
};

module.exports = LinkedList;
