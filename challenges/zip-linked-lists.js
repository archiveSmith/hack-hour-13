/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
  this.index = 0;
}

function zip(l1, l2) {
  let l3 = new Node();

  function recurse(l1, l2, l3) {
    l3.index += 1;
    if (!l1.hasOwnProperty("value") && !l2.hasOwnProperty("value")) {
      return;
    }
    if (!l1.hasOwnProperty("value")) {
      l3.index = 2;
    }
    if (!l2.hasOwnProperty("value")) {
      l3.index = 1;
    }
    if (l3.index % 2 === 1) {
      l3.value = l1.value;
    } else {
      l3.value = l2.value;
    }
    if (l3.index % 2 === 1) {
      l3.next = new Node(l2.value);
    } else {
      l3.next = new Node(l1.value);
    }
    if (l1.next === null && l2.next === null) {
      return;
    }
    l3.next.next = new Node();
    recurse(l1.next, l2.next, l3.next.next);
  }

  recurse(l1, l2, l3);
  return l3;
}

module.exports = { Node: Node, zip: zip };
