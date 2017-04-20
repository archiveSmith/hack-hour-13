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
 function linkedLists() {
   this.head = null;
   this.tail = null;
 }

function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList(l1, l2) {
  let currL1 = l1.head;
  let currL2 = l2.head;

  // create a temporary linkedLists instance for if currL1 or currL2 are different lengths
  // since the goal is to send one linkedLists, the newly created linkedLists will become
  // the new next of L1 for when L2 is longer than L1
  let tempLL = new linkedLists();
  let newHead = new Node(null);
  let tempNode = newHead;
  tempLL.head = newHead;
  // tempLL.head = new Node(null);

  while (currL1 || currL2) {
    // if one of the linkedLists next is null and the other isn't,
    // add the value of l2 to the tempLL
    console.log('while loop iterated');
    if (!currL1 && currL2) {
      // console.log('currL1 ' + currL1);
      // console.log('currL2 ' + currL2.value);
      // for when there is no nodes with values on tempLL
      // reinitialize the newHead to a new node with the value of currL2
      // point newHead's next to the next of currL2
      // then finally assign tempNode to currL2.next
      if (newHead.value === null) {
        newHead = new Node(currL2.value);
        newHead.next = currL2.next;
        tempNode = currL2.next;
        currL2 = currL2.next;
      } else {
      // assign tempNodes next to currL2
      // and then reassign currL2 to its next value
        tempNode.value = currL2.value;
        currL2 = currL2.next
        tempNode.next = currL2;
      }
    // check if the value of l1's value and l2's value added is less than 10
    // if so, add the numbers and go to the next node in the linkedLists
    } else if (currL1.value + currL2.value < 10) {
      currL1.value = currL1.value + currL2.value;
      currL1 = currL1.next;
      currL2 = currL2.next;
    } else if (currL1.value + currL2.value >= 10) {
    // if l1's value and l2's value is equal to a two or more digit number
    // make the last digit equal to the value of l1, and carry all the other
    // digits over to the next node and have them added to the next node's
    // l1 and l2 by adding them over to l1 before traversing to the next node
      let tempNum = (currL1.value + currL2.value).toString();
      currL1.value = +tempNum.slice(-1);
      currL1.next.value += +tempNum.slice(0, -1);
      currL1 = currL1.next;
      currL2 = currL2.next;
    }
  }
  // if tempLL has a list, add that list to l1
  if (tempLL.head) l1.next = tempLL;
  return l1;
}

let freshL1 = new linkedLists();
let freshL2 = new linkedLists();
freshL2.head = new Node(4);
freshL2.head.next = new Node(2);
freshL2.head.next.next = new Node(3);
freshL2.tail = freshL2.head.next.next;
freshL1.head = new Node(5);
freshL1.head.next = new Node(3);
freshL1.tail = freshL1.head.next;

addLinkedList(freshL1, freshL2);



module.exports = {Node: Node, addLinkedList: addLinkedList};
