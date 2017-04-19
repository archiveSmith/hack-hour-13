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
  const str1 = '';
  const str2 = '';
  let num1;
  let num2;
  while (l1) {
    num1 = Number((str1 + l1.value).split('').reverse().join(''));
    l1 = l1.next;
  }
  while (l2) {
    num2 = Number((str2 + l2.value)).split('').reverse().join('');
    l2 = l2.next;
  }
  const resultArr = (num1 + num2).toString().split('');
  let lSum = new Node();
  resultArr.forEach((n) => {
    lSum.value = Number(n);
    lSum.next = lSum;
  });
  return lSum;
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
