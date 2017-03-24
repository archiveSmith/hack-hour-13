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

  let node1 = l1;
  let node2 = l2;
  let oneInd = 0;
  let twoInd = 0;

  while (node1.next) {
    node1 = node1.next;
    oneInd += 1;
  }

  while (node2.next) {
    node2 = node2.next;
    twoInd += 1;
  }

  var currNode, halfLength, atOne;
  if (twoInd >= oneInd) {
    currNode = node1;
    halfLength = oneInd;
    atOne = true;
    twoInd = oneInd;
  } else {
    currNode = node2;
    halfLength = twoInd;
    atOne = false;
    oneInd = twoInd;
  }

  console.log('halfLength', halfLength);

  const linkSwitches = atOne ? (2 * halfLength) + 1 : 2 * (halfLength + 1);

  console.log('linkSwitches:', linkSwitches);

  for (let i = 0; i < linkSwitches; i += 1) {
    console.log('entered for loop!');
    if (atOne) {
      console.log('switching');
      currNode.next = node2;
      twoInd -= 1;
      node2 = l2;
      for (let j = 0; j < twoInd; j += 1) {
        node2 = node2.next;
      }
      currNode = node2;
      atOne = false;
    } else {
      currNode.next = node1;
      oneInd -= 1;
      node1 = l1;
      for (let j = 0; j < oneInd; j += 1) {
        node1 = node1.next;
      }
      currNode = node1;
      atOne = true;
    }
  }
};

const list1Zero = new Node(0);
const list1One = new Node(2);
const list1Two = new Node(4);

list1Zero.next = list1One;
list1One.next = list1Two;

const list2Zero = new Node(1);
// const list2One = new Node(3);
// const list2Two = new Node(5);

// list2Zero.next = list2One;
// list2One.next = list2Two;

zip(list1Zero, list2Zero);

let currNode = list1Zero;

while (currNode.next) {
  console.log(currNode.value);
  currNode = currNode.next;
}
console.log(currNode.value);


module.exports = {Node: Node, zip: zip};
