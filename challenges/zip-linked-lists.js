/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
  console.log(l1);
  let headNode = l1;
  let temp1;
  let temp2;
  while (l1.next && l2.next) {
    temp1 = l1.next;
    l1.next = l2;
    temp2 = l2.next;
    l2.next = temp1;
    // l2.next.next = temp2;
    l1 = temp1;
    l2 = temp2;
  }
  console.log(l1);
};

    // currentNode = l1;
    // var tempHead1 = l1.next;
    // currentNode.next = l2;
    // var tempHead2 = l2.next;
    // currentNode = currentNode.next;
    // currentNode.next = tempHead1;
    // currentNode.next = tempHead2;

var n1 = new Node(1);
var n3 = new Node(3);
n1.next = n3;

var n2 = new Node(2);
var n4 = new Node(4);
n2.next = n4;

zip(n1, n2);

module.exports = { Node: Node, zip: zip };
