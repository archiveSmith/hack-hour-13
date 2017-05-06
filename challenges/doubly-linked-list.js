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
  let addedNode = new Node(val);
  if (!this.head) {
    this.tail = this.head = addedNode;
  } else {
    this.tail.next = addedNode;
    addedNode.prev = this.tail;
    this.tail = addedNode;
  }
};



/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  if (!this.head) {return "there are no nodes to remove";}

  let curr = this.head;
  while (val !== curr.val) {
    curr = curr.next;
  } 
  //values are now the same so we know curr needs to be removed;
  let removed = curr;

  //last node
  if (curr.prev && !curr.next) {
    curr.prev = this.tail;
  }
  //first node
  else if (!curr.prev && curr.next) {
    curr.next = this.head;
  }
  //only one node 
  else if (!curr.prev && !curr.next) {
    this.tail = this.head = null;
  }
  //middle node
  else if (curr.prev && curr.next) {
    curr.prev.next = curr.next;
    curr.next.prev = curr.prev;
  }
  
  return removed;
};
/*
*/

///////////////////////////////////////////////////////
let list = new LinkedList();
list.add(1);
// list.add(2);
// list.add(3);
list.add(4);
list.remove(4);
//-------------
console.log(list);





module.exports = LinkedList;
