/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

//zip the two lists together
// zip order should be l1 then l2, l1, l2 ect. 
//take the first value for l1
//take the second value for l2 



function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
  if(!l1) return l2;
  if(!l2) return l1;

 let head = l1; 
 let l1 = l1.next;
 let body = head;
  while(l1 && l2){
    body.next = l2; 
    l2 = l2.next; 
    body= body.next;

    body.next = l1
    l1 = l1.next; 
    body = body.next; 

  }
  return head;
}


  // let nextl1 = l1.next
  // let zipped = Node(l1)
  // let nextZipped = zipped.next;
  // while(nextl1 !== null){
  //   nextl1 = nextl1.next;
  //   while(l2 !== null){
  //     l2 === l2.next; 
  //   }
  // }
};
zip(5,3)
module.exports = {Node: Node, zip: zip};
