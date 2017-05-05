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
  if (!this.head) {
    this.head = this.tail = new Node(val);
  } else {
    let currlast = this.tail;
    this.tail.next = new Node(val);
    this.tail = this.tail.next;
    this.tail.prev = currlast;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function (val) {
  function traverse(node) {
    if (!node || node.next === null) return;
    if (node.val === val) {
      let previous = node.prev;
      let next = node.next;

      previous.next = next;
      next.prev = previous;
    }
    traverse(node.next);
  }
  traverse(this.head);
};

module.exports = LinkedList;
