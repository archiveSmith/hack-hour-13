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

// output is a linked list without duplicate values.
// input linked list
// instantiate a cache to hold all values
// iterate through linked list and push each value to the cache
// each iteration check cache for duplicates
  // if duplicates then overwrite duplicates
  // if not duplicate then add to cache.
// iterate until head.next is null
// take keys of cache and create new linked list.

function Node(value) {
  this.value = value;
  this.next = null;
}

function deleteDups(head) {
  let currhead = head;
  const cache = {};

  while (currhead) {
    if (!cache[currhead.value]) {
      cache[currhead.value] = currhead.value;
      currhead = currhead.next;
    } else {
      cache[currhead.value] = currhead.value;
      currhead = currhead.next;
    }
  }

  const valuesArr = Object.keys[cache];
  let prevnode = null;
  let newHead = null;
  let i = 0;


  while (i < valuesArr.length) {
    const newnode = new Node(valuesArr[i]);
    if (prevnode === null) {
      newHead = newnode;
      prevnode = newnode;
      i += 1;
    } else {
      prevnode.next = newnode;
      prevnode.next = prevnode;
      i += 1;
    }
  }
  return newHead;
}

module.exports = deleteDups;
