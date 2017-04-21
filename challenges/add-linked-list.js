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
  function traverse(node, num = '') {
    num += node.value.toString();
    if (node.next === null) return num;
    return traverse(node.next, num);
  }
  let num1 = traverse(l1).split('').reverse().join('');
  let num2 = traverse(l2).split('').reverse().join('');
  let result = parseInt(num1) + parseInt(num2);
  result = result.toString().split('');
  // console.log(result);
  let head = new Node(parseInt(result.pop()));
  let node = head;
  while(result.length) {
    node.next = new Node(parseInt(result.pop()));
    node = node.next;
  }
  return head;
}

// var list1 = new Node(5);
// list1.next = new Node(6);
// list1.next.next = new Node(7);

// var list2 = new Node(8);
// list2.next = new Node(9);
// list2.next.next = new Node(0);

// addLinkedList(list1, list2);

module.exports = {Node: Node, addLinkedList: addLinkedList};
