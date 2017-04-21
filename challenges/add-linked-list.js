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
  let l3 = new Node(l1.value + l2.value);

  let curr1 = l1, curr2 = l2, curr3 = l3;

  console.log(curr1)

  while(curr1 && curr2) {
    if(curr1.next !== null && curr2.next !== null) {
      curr3.next = new Node( (curr1.next.value + curr2.next.value) % 10 );

      curr1 = curr1.next;
      curr2 = curr2.next;
      curr3 = curr3.next;
    } else {
      break;
    }
  }
  return l3;
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
