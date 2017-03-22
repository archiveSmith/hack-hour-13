/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
  let node = new Node(l1.value);
  node.next = new Node(l2.value);
  let curr = node.next;
  let currL1 = l1.next;
  let currL2 = l2.next;
  while (currL1 && currL2) {
    curr.next = new Node(currL1.value);
    curr.next.next = new Node(currL2.value);
    curr = curr.next.next;
    currL1 = currL1.next;
    currL2 = currL2.next;
  }
  return node;
};

// const linked = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: null
//     }
//   }
// };
//
// const linked2 = {
//   value: 'A',
//   next: {
//     value: 'B',
//     next: {
//       value: 'C',
//       next: null
//     }
//   }
// };
//
// zip(linked, linked2);

module.exports = {Node: Node, zip: zip};
