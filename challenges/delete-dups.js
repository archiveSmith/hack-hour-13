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
  let prevNode = {};
  let node = head;
  let values = {};
  while (node !== null) {
    if (values[node.value]) {
      prevNode.next = node.next;
      node = node.next;
    } else {
      values[node.value] = true;
      prevNode = node;
      node = node.next;
    }
  }
  return head;
}

module.exports = deleteDups;
