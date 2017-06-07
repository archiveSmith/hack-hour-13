// Done!

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

// this code should work

function Node(value) {
  this.value = value;
  this.next = null;
}

function deleteDups(head) {
  var cache = {};
  var linkedList = head;
  var i = head;
  var j = head;
  // if i = dup, don't reassign j
  // j.next = i.next
  cache[i.value] = true
  while (i) {
    // console.log(cache);
    // if the value exists in the cache, set 'next' to skip the node
    if (cache[i.value] == true) {
      // console.log(i);
      j.next = i.next;
    // if the value does not exist in the cache, set the value in the cache to 'true'
    } else if (!cache[i.value]){
      cache[i.value] = true;
      j = j.next;
    }
    i = i.next;
  }
  // console.log(linkedList);
  return linkedList;
}

// function print(head){
//   var n = head;
//   while(n){
//     console.log(n.value);
//     n = n.next;
//   }
// }

var n1 = new Node(2);
var n2 = new Node(2);
var n3 = new Node(2);
n1.next = n2;
n2.next = n3;

console.log(deleteDups(n1));

module.exports = deleteDups;
