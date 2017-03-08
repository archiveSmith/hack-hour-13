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

    // check whether head.next is null, if so, return the value of head
    if(!head.next) return head.value;

    // check the length of the linkedList by a while loop that iterates for as long as the value of next is not null
    // in order to not change the value of head, create a new node that holds the values of head

    let node = head;

    let linkedListLength = 1;

    while(node.next) {
      node = node.next;
      linkedListLength++;
    }

   // now we have the length of the linkedList, iterate through the linked list for as long as i < linkedListLength - k
   // when this happens, return the value of the kth node
   let kthLastNode = head;

   for(let i = 0; i < linkedListLength - k; i += 1) {
     kthLastNode = kthLastNode.next;
   }
   return kthLastNode.value;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
