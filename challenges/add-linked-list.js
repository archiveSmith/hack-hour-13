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
  let newNode = new Node();

  let temp1;
  let temp2;
  let current;
  let prev;

  while (l1 && l2) {
    temp1 = l1.value;
    temp2 = l2.value;

    if (current === undefined) {
      current = newNode(temp1 + temp2);
      prev = current;
    }
    else {
      if (temp1 + temp2 >= 10) {
        current.value = prev.value += 1;
        let tempHolder = temp1 + temp2 + '';
        let newTemp = tempHolder[tempHolder.length - 1];
        current.next = newNode(newTemp);
      }
      else {
        current.next = newNode(temp1 + temp2);
      }
    }
    l1 = l1.next;
    l2 = l2.next;
  }

  if (l1) current.next = l1;
  if (l2) current.next = l2;

  return current;
}

module.exports = { Node: Node, addLinkedList: addLinkedList };
