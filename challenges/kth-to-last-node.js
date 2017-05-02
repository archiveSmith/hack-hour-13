/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */

// for the test case, create linked list
// in the function, write a get function for finding a value in the linked list
// the value will be the index counting from the end of the linked list

// we could do this by doing finding the length of the node and subtracting length from the parameters
// use a while loop with a counter to add count to the node while node.next !== null
// use another while loop to iterate through the linked list until you get to the one you want

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
  var countNode = head;
  var initialCount = 1;
  while(countNode.next){
    initialCount++;
    countNode = countNode.next;
  }
  // console.log(initialCount);
  var currentNode = head;
  var findIndex = initialCount - (k-1);
  // console.log(findIndex);
  findCount = 1;
  while(currentNode.next){
    // console.log("in the while loop");
    if(findCount === findIndex) return currentNode;
    findCount++;
    currentNode = currentNode.next;
  }
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(kthToLastNode(2, a)); 
// returns 'D' (the value on the second to last node)

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
