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
  this.index = 0;
}
let obj = {};

function kthToLastNode(k, head) {
  head = head.next;
  this

  //Traverse down the list while the curr node is not null
  //Set the next node as the head and increment the count through each pass.
  //When the count is equal to the k value being passed in then return the value of that node.
  if (head.next !== null){
    obj[head.index] = head.value;
    obj[head.index] = obj[head.index + 1];
    return kthToLastNode(k, head.next);
  }else{
    obj[head.index] = head.value;
    return obj[head.index + 1 - k];
  }
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
