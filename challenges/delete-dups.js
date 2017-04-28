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
  const values = {};
  let prev;
  let current = head;

  while (current) {
    if (values[current.value]) {
      current = current.next;
      prev.next = current;
    } else {
      values[current.value] = current.value;
      // console.log('values: ', values);
      prev = current;
      current = current.next;
    }
  }
  return head;
}

let newList = { value: "4", next: { value: "4", next: { value: "4", next: { value: "6", next: null } } } };
console.log(deleteDups(newList));
module.exports = deleteDups;
