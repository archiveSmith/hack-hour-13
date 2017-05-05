/*
Create a doubly linked list with an add and remove method
 */

function LinkedList() {
  this._length = 0;
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
  let newNode = new Node(val);
  if(this._length){
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  } else{
    this.head = newNode;
    this.tail = newNode;
  }
  this._length ++;
  return newNode;
  
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let currentNode = this.head;
  while(currentNode){
    if(currentNode.val === val){
      currentNode = currentNode.next;
      break;
    }

    currentNode = currentNode.next;
  }
  this._length--;
};

module.exports = LinkedList;
