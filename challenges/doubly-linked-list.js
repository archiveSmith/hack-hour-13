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

  //only one node 
  if (!curr.prev && !curr.next) {
    this.tail = this.head = null;
  }
  //first node
  else if (!curr.prev && curr.next) {
    this.head = curr.next;
    this.head.prev = null;
  }
  //middle node
  else if (curr.prev && curr.next) {
    curr.prev.next = curr.next;
    curr.next.prev = curr.prev;
  }
  //last node
  else if (curr.prev && !curr.next) {
    this.tail = curr.prev;
    this.tail.next = null;
  }
  
  return removed;
};


//-------------------------------------------
LinkedList.prototype.add2 = function(val) {
  const newNode = new Node(val);
  if (!this.head) {
    this.head = this.tail = newNode;
    return;
  }

  newNode.prev = this.tail;
  this.tail.next = newNode;
  this.tail = newNode;
};

LinkedList.prototype.remove2 = function(val) {
  let node = this.head;
  if (!node) return;
  //if first node is a match
  if (node.val === val) {
    //if there is more than one node
    if (node.next) {
      node.next.prev = null;
    }
    this.head = node.next;
    delete node;
    return;
  }

  while(node) {
    if (node.val === val) {
    //if a middle node or end node
      node.prev.next = node.next;
      //if a middle node
      if (node.next) {
        node.next.prev = node.prev;
      }
      //if the tail node 
      if (node === this.tail) {
        this.tail = node.prev;
        this.tail.next = null;
      }
      delete node;
      return;
    }
    node = node.next;
  }
}

///////////////////////////////////////////////////////
let list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.remove(2);
//-------------
console.log(list);





module.exports = LinkedList;
