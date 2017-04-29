/**
 * Write a function deleteDups that removes duplicates from an unsorted linked list.
 *
 * Example:
 * 1->2->3->3
 *
 * deleteDups(head); -> 1->2->3
 *
 * Extra:
 * How would you solve this problem if a temporary buffer is not allowed?
 */

//A way to test:
// const a = new Node('A');
//  const b = new Node('B');
//  const c = new Node('B');
//  const d = new Node('D');
//  const e = new Node('E');
 
//  a.next = b;
//  b.next = c;
//  c.next = d;
//  d.next = e;
 
// function Node(val) {
//   this.value = val;
//   this.next = null;
// }


function deleteDups(head) {
  const cache = {};
  let j;
  
  for (let i = head; i; i = i.next) {
    if (!cache[i.value]) {
      cache[i.value] = true;
      j = i;
    } else {
      j.next = i.next;
    }
  }
  return JSON.stringify(head);
}

//a lot slower since quadratc but doesn't use extra object:

// function deleteDups(head) {
//   for (let i = head; i; i = i.next) {
//     let j = i;
  
//     while (j.next) {
//       if (j.next.value === i.value) {
//         j.next = j.next.next;
//       } else {
//         j = j.next;
//       }
//     }
//   }
//   return head 
//   //can JSON.stringify head to make it easier to read
//   //also: don't really have to return anything;
// }

// deleteDups(a);

//my orginal function: 

// function deleteDups(head) {
//   let curr = head;
//   while (curr.next) {
//     curr = curr.next;
//       if (curr.value === curr.next.value) {
//         curr = curr.next.next;
//       }
//   }
//   return head;
// }

module.exports = deleteDups;
