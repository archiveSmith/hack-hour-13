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
  var first = new Node();
  var last = first;

  while (l1 !== null || l2 !== null) {
    if (l1 !== null) {
      last.next = new Node(l1.value);
      last = last.next;
      l1 = l1.next;
    }
    if (l2 !== null) {
      last.next = new Node(l2.value);
      last = last.next;
      l2 = l2.next;
    }
  }

  return first.next;
};

module.exports = {Node: Node, zip: zip};
