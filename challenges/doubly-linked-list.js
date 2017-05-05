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
  if (this.head === null) this.head = this.tail = new Node(val);
  else if (this.head === this.tail) {
    this.tail = new Node(val);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  } else {
    this.tail.next = new Node(val);
    this.tail.next.prev = this.tail;
    this.tail = this.tail.next;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function (val) {
  if (this.head === null) return 0
  if (this.head === this.tail && this.head.val === val) return this.head = this.tail = null;
  for (let node = this.head; node; node = node.next) {
    if (node.val === val) {
      node.prev === null ? this.head = node.next : node.prev.next = node.next;
      node.next === null ? this.tail = node.prev : node.next.prev = node.prev;
      break;
    }
  }
};

// const ll = new LinkedList()
// ll.add(1);
// ll.add(2);
// ll.add(3);
// ll.add(4);
// ll.remove(2);

// console.log(ll.head.next.next.prev.val);
// console.log(ll.head);

module.exports = LinkedList;
