// Mostly done, didn't finish remove method

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
  let nodeToAdd = new Node(val);
  if (this.head) {
    // we are adding node to the end of the list
    nodeToAdd.prev = this.tail;
    this.tail.next = nodeToAdd;
    this.tail = nodeToAdd;
  } else {
    // make the node the head
    this.head = nodeToAdd;
    this.tail = nodeToAdd;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  // loop through nodes, if the val is equal to the value of the node, point the node's previous' next to the next node
  // point the node's next's previous to the previous node
  // if this.head = this.tail, then check for a match, remove pointer of this.head and this.tail
  let currentNode = this.head;
  if(!currentNode) return;
  while (currentNode) {
    if (currentNode.val === val) {
      currentNode.prev.next = currentNode.next;
      currentNode.next.prev = currentNode.prev;
    }
    currentNode = currentNode.next;
  }
  return null;
};

let linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
console.log(linkedList.head);

module.exports = LinkedList;
