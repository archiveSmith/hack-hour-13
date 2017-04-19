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
  let head, prevNode;
  let tempVal = 0;
  while (l1 || l2) {
    let currVal = 0;
    if (l1 === null) {
      currVal = l2.value;
      l2 = l2.next;
    } else if (l2 === null) {
      currVal = l1.value;
      l1 = l1.next;
    } else {
      currVal = l1.value + l2.value;
      l1 = l1.next;
      l2 = l2.next;
    }

    currVal = currVal + tempVal;

    if (currVal >= 10) {
      tempVal = Math.floor(currVal / 10);
      currVal = currVal % 10;
    } else {
      tempVal = 0;
    }

    const currNode = new Node(currVal);
    if (prevNode === undefined) {
      head = currNode;
      prevNode = head;
    } else {
      prevNode.next = currNode;
      prevNode = currNode;
    }
  }
  
  if (tempVal > 0) {
    prevNode.next = new Node(tempVal);
  }
  return head;
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
