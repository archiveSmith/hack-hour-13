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
//
// Node.prototype.add = function(val) {
//     if(this.next === null){
//       this.next =  new Node(val);
//     }
//     while(this.next !== null){
//       this.next = this.next.next;
//     }
//       if (this.next === null){
//         this.next = new Node(val);
//       }
// }

function kthToLastNode(k, head) {
  counter = 1;
  while(head.next !== null){
    counter ++;
    head.next = head.next.next;
    console.log("head", head.next)
  }
  console.log(counter);
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
 kthToLastNode(3, a)
module.exports = {Node: Node, kthToLastNode: kthToLastNode};
