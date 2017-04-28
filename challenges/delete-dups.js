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



function deleteDups(head, prev = null, cache = []) {
  if (!head) return null;
  if (cache.includes(head.value)) {
    return deleteDups(head.next, prev, cache);
  } else {
    cache.push(head.value);
    head.next = deleteDups(head.next, head, cache);
  }
  return head;
}

module.exports = deleteDups;