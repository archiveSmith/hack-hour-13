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
  // create new Node that will go at the end of list, then reassign the values
  let newNode = new Node(val);

  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function (val) {
  if (!this.head) return

  for (let i = this.head; i; i = i.next) {
    if (i.val === val) {
      // if the value that is being removed is the first value, only reassign the head
      if (i === this.head) {
        this.head = i.next;
        this.head.prev = null;
      } else if (i === this.tail) { // if the value is the last value, only reassign the tail
        this.tail = i.prev;
        this.tail.next = null;
      } else { // for everything in between, reassign both the next and the prev value
        i.prev.next = i.next;
        i.next.prev = i.prev;
      }
      break;
    }
  }
};

/*
  let head = new LinkedList();
  head.head = head.tail = new Node(5);
  head.add(10)
  head.add(20)
  console.log('first', head);
  head.remove(10);
  console.log('second', head)
*/

module.exports = LinkedList;
