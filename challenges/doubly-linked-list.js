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
  // add first node
  if (!this.head) this.head = this.tail = new Node(val);
  // add new node then assign new tail
  else {
    const newNode = new Node(val);
    // connect new node's prev to current tail
    newNode.prev = this.tail;
    // point current tail's next to new node
    this.tail.next = newNode;
    // update tail pointer
    this.tail = this.tail.next;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  // traversal pointer
  let curr = this.head;
  // keep traversing while pointer hasn't hit dead end
  // and hasn't found target val
  while (curr && curr.val !== val) {
    curr = curr.next;
  }

  // if stopped on a Node, remove it
  if (curr) {
    // if removing first node in linked list
    if (curr === this.head) {
      // if head is tail, just one node in list so set to null
      if (this.head === this.tail) {
        this.head = this.tail = null;
        return;
      }
      // move head along, if has next
      this.head = this.head.next;
      // remove pointer to previous head
      this.head.prev = null;
    }
    // removing from end
    else if (curr === this.tail) {
      // move tail back
      this.tail = this.tail.prev;
      // remove pointer to previous tail
      this.tail.next = null;
    }
    // target node in middle
    else {
      // bridge nodes around curr
      curr.prev.next = curr.next;
      curr.next.prev = curr.prev;
    }
  }
};

module.exports = LinkedList;
