/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
  let current = l1;
  let l2Next = true;
  let temp1 = l1;
  let temp2 = l2;

  while (current.next) {
    if (l2Next) {
      temp1 = current.next;
      current.next = temp2;
      l2Next = false;
    }else{
      temp2 = current.next
      current.next = temp1
      l2Nexgt = true;
    }
    current = current.next;
  }
  
  if(temp1) current.next = temp1;
  if(temp2) current.next = temp2;

  return l1;
};

module.exports = { Node: Node, zip: zip };
