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
  const node = new Node(val);

  if (this.head === null) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = this.tail.next;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function (val) {
  if (this.head.val === val) this.head = this.head.next;

  let curr = this.head;
  let removed = false;

  while (curr.next) {
    if (curr.val === val) {
      curr.next.prev = curr.prev;
      curr.prev.next = curr.next;
      curr = this.tail;
      removed = true;
    }
    else curr = curr.next;
  }
  if (this.tail.val === val) {
    this.tail = this.tail.prev;
    this.tail.next = null;
    removed = true;
  }

  if (!removed) return 'Value not found in list';
};

module.exports = LinkedList;
