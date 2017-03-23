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


  // if the first LinkedList is defined, create an instance of node with its value at its head
  // else, have the head l2 be the instance of node, else, return null
  if (l1) {
    node = new Node(l1.value);
  } else {
    return l2;
  }
  // determine how many nexts there are total in l1 and l2 to determine toggle
  let totalNexts = 0;

  // create references to l1 and l2 so they won't get manipulated while adding nexts
  let refTol1 = l1;
  let refTol2 = l2;

  do {
    totalNexts += 1;
    refTol1 = refTol1.next;
    if (refTol2) {
      totalNexts += 1;
      refTol2 = refTol2.next;
    }
  } while (refTol1);

 // while l1.next is not null and l2.next is not null, add a node to node
 // varying on the bool, append to our node with l1 or l2
  if (!(totalNexts % 2)) {
    node.next = zip(l2, l1.next);
  } else {
    node.next = zip(l2, l1.next);
  }

  return node;
}

// let link1 = new Node(3);
// link1.next = new Node(5);
//
// let link2 = new Node(7);
// link2.next = new Node (4);

// zip(link1, link2);

module.exports = {Node: Node, zip: zip};
