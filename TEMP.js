/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(value) {
  this.value = value;
  this.next = null;
}

function zip(a, b) {
  let zipped = a;
  let currA = a;
  let currB = b;
  while (currA && currB.next) {
    
  }
}

///////////////////////////

let a = new Node(1);
a.next = new Node(2);
a.next.next = new Node(3);

let b = new Node(4);
b.next = new Node(5);
b.next.next = new Node(6);

console.log(zip(a,b));