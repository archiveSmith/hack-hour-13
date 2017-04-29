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

const deleteDups = (node) => {
  const store = {};
  while (node) {
    if (store[node.next]) {
      node.next = node.next.next;
    }
    store[node] = node;
    node = node.next;
  }
  return false;
};

module.exports = deleteDups;
