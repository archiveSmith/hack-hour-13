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

  if (!this.head) {
    this.head = this.tail = newNode;
    return;
  } 
  
  newNode.prev = this.tail;
  this.tail.next = newNode;
  this.tail = newNode;
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function (val) {
  let node = this.head;
  if (!node) return;

  if (node. val === val) {
    if (node.next) node.next.prev = null;
    this.head = node.next;
    delete node;
    return;
  }

  while (node) {
    if (node.val === val) {
      node.prev.next = node.next;
      if (node.next) node.next.prev = node.prev;
      if (node === this. tail) {
        this.tail = node.prev;
        this.tail.next = null;
      }

      delete node;
      return;
    }
    node = node.next;
  }
};

module.exports = LinkedList;
