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
  if (!this.head) {
    this.head = this.tail = new Node(val);
  } else if (this.head === this.tail) {
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
LinkedList.prototype.remove = function(val) {
  if (!this.head) return null;
  if (this.head === this.tail && this.head.val === val) {
    return this.head = this.tail = null;
  }
  for (let node = this.head; node; node = node.next) {
    if (node.val === val) {
      node.prev === null ? this.head = node.next : node.prev.next = node.next;
      node.next === null ? this.tail = node.prev : node.next.prev = node.prev;
    }
  }
};

module.exports = LinkedList;

// const list1 = new LinkedList();
// list1.add(1);
// list1.add(2);
// list1.add(3);
// list1.add(4);
// list1.remove(1)
// console.log(list1.head);
