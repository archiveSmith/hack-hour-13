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
LinkedList.prototype.add = function (val) {
  const newNode = new Node(val);
  if (this.head) {
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  } else {
    this.head = this.tail = newNode;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function (val) {
  let curr = this.head;
  while (curr && curr.val !== this.val) curr = curr.next;
  if (curr) {
    if (curr.prev) curr.prev.next = curr.next;
    if (curr.next) curr.next.prev = curr.prev;
    if (curr === this.head) this.head = curr.next;
    if (curr === this.tail) this.tail = curr.prev;
  }
};

module.exports = LinkedList;
