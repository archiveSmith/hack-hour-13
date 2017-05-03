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


  currentNode = l1;
  var tempHead1 = l1.next;
  currentNode.next = l2;
  var tempHead2 = l2.next;
  currentNode = currentNode.next;
  currentNode.next = tempHead1;
  currentNode.next = tempHead2;
};


var n1 = new Node(1);
var n3 = new Node(3);
n1.next = n3;

console.log(n1);
module.exports = {Node: Node, zip: zip};
