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
  const result = [];
  let newHead = head;
  while (newHead !== null) {
    result.push(newHead);
    newHead = newHead.next;
  }

  const valueLocation = result.length - k;
  // console.log(result[valueLocation].value);
  return result[valueLocation].value;
  // console.log(valueLocation)
  //
  // while(head !== null){
  //   head = head.next;
  //   counter += 1
  //   if(counter === valueLocation){
  //     console.log(head.value)
  //     return (head.value)
  //   }
}

  //console.log(result)
  // counter += 1;
  // console.log(counter - k)
  // counter = 0;
  // while(head.next !== null){
  //   counter += 1;
  //   console.log("this is a line", head.next.value)
  //   if(counter === k) result = head.next.value;
  //   head.next = head.next.next;
  // }





 const a = new Node('A');
 const b = new Node('B');
 const c = new Node('C');
 const d = new Node('D');
 const e = new Node('E');

 a.next = b;
 b.next = c;
 c.next = d;
 d.next = e;
 kthToLastNode(4, a)
module.exports = {Node: Node, kthToLastNode: kthToLastNode};
