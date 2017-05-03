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
// create a new node that holds the value at the head of the first LinkedList
  let node;

  if (l1) {
    node = new Node(l1.value);
  } else {
    return l2;
  }

  node.next = zip(l2, l1.next);

  return node;
}

// let link1 = new Node(3);
// link1.next = new Node(5);
//
// let link2 = new Node(7);
// link2.next = new Node (4);

// zip(link1, link2);

module.exports = {Node: Node, zip: zip};
