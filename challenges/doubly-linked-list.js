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
  let newNode = Node(val);
  let curr;

  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
    return;
  }

  while (curr) {
    
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  
};

module.exports = LinkedList;
