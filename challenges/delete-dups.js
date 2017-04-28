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
  const buffer = [];
  while (head) {
    buffer.push(head.value);
    head = head.next;
  }
  const newArr = buffer.filter((el, pos) => buffer.indexOf(el) === pos);
  const list = new Node(newArr[0]);
  let curr = list;
  for (let i = 1; i < newArr.length; i += 1) {
    curr.next = new Node(newArr[i]);
    curr = curr.next;
  }
  return list;
}

module.exports = deleteDups;
