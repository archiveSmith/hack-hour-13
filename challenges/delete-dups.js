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
  let nodes = {head: head};
  let curr = head; 
  while(curr !== null){
    if(nodes[curr.next] === undefined) nodes[curr.next] = curr.next; 
    else{
      let setVal = curr.next.next ? curr.next.next : null
      curr.next = setVal
    }
    curr = curr.next
  } 
}

module.exports = deleteDups;
