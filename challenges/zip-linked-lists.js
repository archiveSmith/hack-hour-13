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
  //case when l1 or l2 does not exist
  if(!l1) return l2;
  if(!l2) return l1;

  

};

module.exports = {Node: Node, zip: zip};
