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

var Node = function(value) {
  this.value = value;
  this.next = null;
}

function deleteDups(head) {
  // curr pointer - has current value to search for
  let curr = head;
  
  // check if curr isn't null
  while (curr && curr.next) {
    // peeker node to see if any duplicate values after it
    let peeker = curr;
    // checks if linked list is just one node
    // then sees if any nodes left to peek
    while (peeker && peeker.next) {
      // node to compare against curr
      let compare = peeker.next;
      // remove any found duplicate node(s)
      if (curr.value === compare.value) {
        // make skipper skip over found duplicate
        peeker.next = compare.next;
      }
      // move peeker
      peeker = peeker.next;
    }
    // move curr node
    if (curr.next) curr = curr.next;
  }
  
  return head;
}

module.exports = deleteDups;
