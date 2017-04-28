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
  let curr = head;
  const val = [];
  while (curr) {
    if (!val.includes(curr.value)) {
      val.push(curr.value);
      curr = curr.next;
    } else {
      curr.value = curr.next.value;
      curr.next = curr.next.next;
    }
  }
  return head;
}


module.exports = deleteDups;
