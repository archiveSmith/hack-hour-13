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

function deleteDups(head) {
  // let arr = [];
  // if (!head) return undefined;
  // for (let i = head; i; i = i.next) {
  //   if (i === head) {
  //     arr.push(i.value);
  //   }
  //   if (arr.includes(i.next.value)) {
  //     i.next = i.next.next;
  //   }
  //   arr.push(i.next.value);
  // }
  // return head;

  // const cache = {};
  // let j;

  // for (let i = head; i; i=i.next) {
  //   if (!cache[i.value]) {
  //     cache[i.value] = true;
  //     j = 1;
  //   } else {
  //     j.next = i.next;
  //   }
  // }
  // return head;

  // for (let i = head; i; i = i.next) {
  //   let j = i;
  //   while(j.next) {
  //     if (j.next.value) {
  //       j.next = j.next.next;
  //     } else {
  //       j = j.next;
  //     }
  //   }
  // }
  // return head;
}

module.exports = deleteDups;
