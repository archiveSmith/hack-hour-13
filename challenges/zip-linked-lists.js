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
  if (l1.value !== undefined) {
    let output = new Node(l1.value);
    let currNode = output;
    let onl1 = false;
    let l1Node = l1.next;
    let l2Node = l2;
  } else if (l2.value !== undefined) {
    let output = new Node(l2.value);
    let currNode = output;
    let onl1 = true;
    let l1Node = l1;
    let l2Node = l2.next;
  } else return "No linked lists to zip";

  while (l1Node !== null && l2Node !== null) {
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

