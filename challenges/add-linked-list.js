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
  let l1Arr = [];
  let l2Arr = [];
  let current1 = l1;
  let current2 = l2;
  let l1Int;
  let l2Int;
  let sum;
  let prev;
  let result;

  while (current1 && current2) {
    l1Arr.push(current1.value);
    l2Arr.push(current2.value);
    current1 = current1.next;
    current2 = current2.next;
  }

  l1Int = Number(l1Arr.join(''));
  l2Int = Number(l2Arr.join(''));
  sum = l1Int + l2Int;
  sum = sum.toString();
  let i = 0;

  while (i < sum.length) {
    if (result) {
      result.next = new Node(sum[i]);
    } else {
      result = new Node(sum[i]);
    }
    i += 1;
  }
  return result;
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
