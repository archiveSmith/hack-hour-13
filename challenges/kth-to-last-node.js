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

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
  if (typeof head !== "object" || typeof k !== "number" || typeof head === null || Array.isArray(head)) {
    return "Enter a number for k and a linkedList object for head."
  }
  let node = head;
  const valArr = [];
  //traverse linkedlist and create an array of the values
  while (node !== null) {
    valArr.push(node.value);
    node = node.next;
  }
  //use the array to find the kth to last value
  if (k <= 0 || k > valArr.length) {
    return "Please ensure k is inside the number of linked list nodes"
  }
  return valArr[valArr.length-k];
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};

 