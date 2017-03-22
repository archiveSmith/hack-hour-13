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

  let output = new Node(l1.value);
  let currNode = output;
  let onl1 = false;
  let l1Node = l1.next;
  let l2Node = l2;

  while (l1Node !== null || l2Node !== null) {
    if (l1Node === null) {
      currNode.next = new Node(l2Node.value);
      l2Node = l2Node.next;
    } else if (l2Node === null) {
      currNode.next = new Node(l1Node.value);
      l1Node = l1Node.next;      
    } else if (onl1) {
      currNode.next = new Node(l1Node.value);
      l1Node = l1Node.next;
    } else if (!onl1) {
      currNode.next = new Node(l2Node.value);
      l2Node = l2Node.next;     
    }
    currNode = currNode.next;
    onl1 = !onl1;
  }

  return output;
};

module.exports = {Node: Node, zip: zip};


//TESTS

// let list10 = new Node(10);
// let list11 = new Node(11);
// let list12 = new Node(12);

// list10.next = list11;
// list11.next = list12;

// let list20 = new Node(20);
// let list21 = new Node(21);
// let list22 = new Node(22);
// let list23 = new Node(23);

// list20.next = list21;
// list21.next = list22;
// list22.next = list23;

// let zipped = zip(list10, list20);

// let curr = zipped;

// while (curr !== null) {
//   console.log(curr.value);
//   curr = curr.next;
// }



