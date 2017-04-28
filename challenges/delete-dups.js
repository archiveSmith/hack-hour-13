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
  let arr = [];
  if (!this.head) return undefined;
  for (let i = head; i; i = i.next) {
    if (i = head) {
      arr.push(i.value);
    }
    if (arr.includes(i.next.value)) {
      i.next = i.next.next;
    }
    arr.push(i.next.value);
  }
  return head;
}

module.exports = deleteDups;
