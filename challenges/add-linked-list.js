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
  let curr1 = l1;
  let curr2 = l2;
  let mult = 1;
  let sum = 0;
  while (curr1 || curr2) {
    if (curr1 && curr2) {
      sum += (mult * (curr1.value + curr2.value));
      curr1 = curr1.next;
      curr2 = curr2.next;
    } else if (curr1) {
      sum += (mult * curr1.value);
      curr1 = curr1.next;
    } else if (curr2) {
      sum += (mult * curr2.value);
      curr2 = curr2.next;
    }
    mult *= 10;
  }
  const sumStr = sum.toString();
  const output = new Node(sumStr.charAt(sumStr.length - 1));
  let curr = output;
  for (let i = sumStr.length - 2; i >= 0; i -= 1) {
    curr.next = new Node(sumStr.charAt(i));
    curr = curr.next;
  }
  return output;
}

module.exports = {Node: Node, addLinkedList: addLinkedList};