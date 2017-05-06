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
  const newNode = new Node(val);

  if (!this.head && !this.tail) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let currNode = this.head;
  let tail = this.tail;

  console.log(tail.val);

  // if (!currNode) return "no such value in the linked list";
  //
  // if (currNode.next) {
  //   currNode = null;
  //   tail = null;
  // }
  //
  // if (tail.val === val) {
  //   tail = tail.prev;
  // }
  //
  // while(currNode) {
  //   if (currNode.val === val) {
  //     currNode.prev.next = currNode.next;
  //   } else {
  //     currNode = currNode.next;
  //   }
  // }
};

let list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.remove(3);

console.log(list);

module.exports = LinkedList;
