/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (2 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 7 -> 0 -> 8
 *
 * The 7 is the ones digit (2 + 5).
 * The 0 is the tens digit (1 + 9, carry the 1).
 * The 8 is the hundreds digit (1 carried over + 5 + 2).
 *
 * 3 - 1 - 5 - 8
 * 5 - 9 - 2
 * 
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList(l1, l2) {
  var l1_val = "";
  var l2_val = "";
  // Convert Linked List into values
  while (l1) {
    l1_val += l1.value.toString();
    l1 = l1.next;
  }
  while (l2) {
    l2_val += l2.value.toString();
    l2 = l2.next;
  }
  // Find numeric sum
  var sum = Number(l1_val) + Number(l2_val);
  var sumStr = sum.toString();
  var lastChar = sumStr.slice(-1);
  var firstNode = new Node(lastChar);
  var currNode = firstNode;
  // Create new Linked List
  for (let i = sumStr.length - 2; i >= 0; i--) {
    var newNode = new Node(sumStr[i]);
    currNode.next = newNode;
    currNode = newNode;
  }
  return firstNode;
}

// var n1 = new Node(2);
// var n2 = new Node(1);
// var n3 = new Node(5);
// n1.next = n2;
// n2.next = n3;

// var n4 = new Node(5);
// var n5 = new Node(9);
// var n6 = new Node(2);
// n4.next = n5;
// n5.next = n6;

// console.log(addLinkedList(n1, n4));

module.exports = { Node: Node, addLinkedList: addLinkedList };