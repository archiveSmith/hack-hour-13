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
  let newNode = new Node(val);

  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  }
  else if (this.head === this.tail) {
    this.tail = newNode;
    this.head.next = this.tail;
    this.tail.prev = this.head;
  } else {
    this.tail.next = newNode;
    this.tail.next.prev = this.tail;
    this.tail = this.tail.next;
  }
};

const linked = new LinkedList();
linked.add(5);
linked.add(4);
linked.add(3);
linked.add(12);

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function (val) {
  let newNode = new Node(val);
  let curr = this.head;

  while (curr) {
    if (curr.val === val) {
      curr.prev.next = curr.next;
      return;
    }
    curr = curr.next;
  }
};
// linked.remove(3);
// console.log(linked.head);

module.exports = LinkedList;
