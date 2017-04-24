/**
 * We are familar with linked lists being linear and terminating:
 *
 * A->B->C->D
 *
 * However, linked lists can also have cyclical references:
 *
 * A->B->C->D
 *    ^     |
 *    |     V
 *    G<-F<-E
 *
 * Create a function that accepts a linked list and returns true if the linked list has a cyclical reference
 *
 * var node1 = new Node('1');
 * var node2 = node1.next = new Node('2');
 * var node3 = node2.next = new Node('3');
 * var node4 = node3.next = new Node('4');
 * var node5 = node4.next = new Node('5');
 * hasCycle(node1); // => false
 * node5.next = node2;
 * hasCycle(node1); // => true
 *
 * Challenge 1: Do this in linear time
 * Challenge 2: Do this in constant space
 * Challenge 3: Do not mutate the original nodes in any way
 *
 */

var Node = function (value) {
  this.value = value;
  this.next = null;
}

function hasCycle(head) {
  // returns false if there is no linked list
  if (!head) {
    return false;
  }

  let slow = head;
  let fast = head;

  while (fast) {
    // if fast gets to the end of linked list without circling, return false
    if (fast.next === null) {
      return false;
    }

    // iterate fast once
    fast = fast.next;

    // check again to see if fast ends without circling
    if (fast.next === null) {
      return false;
    }

    // iterate fast again
    fast = fast.next;

    // if they are a linked list, eventually, fast will catch up with slow and they will equal each other
    if (fast === slow) {
      return true;
    }

    // slow moves one
    slow = slow.next;
  }
}

module.exports = { Node: Node, hasCycle: hasCycle }
