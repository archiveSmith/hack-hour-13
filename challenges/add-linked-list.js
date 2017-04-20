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
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList(l1, l2) {
<<<<<<< HEAD
  let l3 = new Node(val);
  //get the sum of l1 node and l2 node
  //if l3 doesn't have a head, set its head and value to sum
  //else, set l3.next to sum
  //if sum is greater than 9, carry extra digits to next sum
=======

>>>>>>> 6a27eb23ac8fdbd43025d02751fd0f3e74d97a01
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
