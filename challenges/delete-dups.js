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

function Node(val) {
  this.value = val;
  this.next = null;
}

function deleteDups(head) {
  for (let i = head; i; i = i.next) {
    for (let j = i; j; j = j.next) {
      // set a previous node
      let prevNode;

      // make sure that i and j are not the same node, then check if the values are the same
      // if they are, then take out the duplicate node and relink the list
      if (j.value === i.value && i !== j && j.next) {
        prevNode.next = j.next;
        prevNode = j.next;
      } else {
        prevNode = j;
      }
    }
  }

  return head;
}

module.exports = {
  deleteDups,
  Node
};
