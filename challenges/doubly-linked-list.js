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
  const newTail = new Node(val);
  if (this.head) {
    this.tail.next = newTail;
    newTail.prev = this.tail;
    this.tail = newTail;
  } else {
    this.head = newTail;
    this.tail = newTail;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let curNode = this.head;
  while (curNode) {
    if (curNode.val === val) {
      if (curNode === this.head && curNode === this.tail) {
        this.head = null;
        this.tail = null;
      } else if (curNode === this.head) {
        this.head = this.head.next;
        this.head.prev = null;
      } else if (curNode === this.tail) {
        this.tail = this.tail.prev;
        this.tail.next = null;
      } else {
        curNode.prev.next = curNode.next;
        curNode.next.prev = curNode.prev;
    }
    curNode = curNode.next;
  }
};

module.exports = LinkedList;
