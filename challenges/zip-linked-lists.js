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
  if (arguments.length === 1) return l1;
  if (arguments.length < 1) return 'Please input list';
  if (arguments[0] === null) return 'Please input list';
  let curr1 = l1;
  let curr2 = l2;
  let temp1 = l1.next;
  let temp2 = l2.next;
  while (curr1 && curr2) {
    curr1.next = curr2;
    if (temp1) curr2.next = temp1;
    curr1 = temp1;
    curr2 = temp2;
    if (temp1) temp1 = temp1.next;
    if (temp2) temp2 = temp2.next;
  }
  return l1;
};

module.exports = {Node: Node, zip: zip};
