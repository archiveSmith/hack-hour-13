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
  // reassign the tail of the LL to a newly created node
  // point the previous tail's next to the new node and assigning the previous
  // of the new node to the old tail
  const node = new Node(val);

  if (!this.head) this.head = this.tail = node;
  else {
    this.tail.next = node;
    this.tail.next.prev = this.tail;
    this.tail = node;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  // assign a currNode to the head of the LL for traversing through the LL
  let currNode = this.head;

  if (currNode.val === val) {
     this.head = currNode.next;
     this.head.prev = null;
     return;
  }
  // if the currNode is at the tail, reassign the tail to the tail's prev
  // and reassign the tail's prev's next to null

  while (currNode) {
    // if the currNode's value is equal to the value to be removed
    // assign the currNode's previous node's next to the currNode's next
    // and then assign the currNode's next's previous to the currNode's previous

    // if the currNode is at the head reassign the head to the currNode's next
    // and reassign the currNode's next's prev to null

    if (currNode.val === val && currNode === this.tail) {
      this.tail = this.tail.prev;
      this.tail.next = null;
      break;
    }

    if (currNode.val === val) {
      currNode.prev.next = currNode.next;
      currNode.next.prev = currNode.prev;
      break;
    }
    currNode = currNode.next;
  }
};

module.exports = LinkedList;
