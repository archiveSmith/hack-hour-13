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
  head = head.next;
  let count = 0;

  //Traverse down the list while the curr node is not null
  //Set the next node as the head and increment the count through each pass.
  //When the count is equal to the k value being passed in then return the value of that node.
  while (head.next !== null){
    head.next = head;
    head[count++];
    if (head[count] === head[k] ){
      return head.value;
    }
  }
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
