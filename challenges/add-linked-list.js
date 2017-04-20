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
  let str1 = '';
  let str2 = '';
  while (l1) {
    str1 += l1.value;
    l1 = l1.next;
  }
  while (l2) {
    str2 += l2.value;
    l2 = l2.next;
  }
  const num1 = Number(str1.split('').reverse().join(''));
  const num2 = Number(str2.split('').reverse().join(''));
  const resultArr = (num1 + num2).toString().split('');
  let lSum;
  let temp;
  resultArr.forEach((n) => {
    lSum = new Node(n) // next is null
    temp = lSum; // set temp to node
    lSum.next = temp; // set next to temp (which is node)
  });
  return lSum;
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
