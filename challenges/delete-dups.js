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
   if (head === null || head.next === null) return head;
   let currNode = head;
   const arrVals = [];
   let prev = null;
   while (currNode) {
     // check if the current value of head is stored inside arrVals
     if (arrVals.includes(currNode.value)) {
       // if not set the next of the previous node to what is the current nodes next
       prev.next = currNode.next;
     }
     // store the current value of currNode to arrVals, and then set the node
     // to previous.  After this is done, move to the next Node.
     arrVals.push(currNode.value);
     prev = currNode;
     currNode = currNode.next;
   }
   return head;
 }

module.exports = deleteDups;
