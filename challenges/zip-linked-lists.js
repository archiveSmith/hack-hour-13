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

function zip(list1, list2) {
  //if either list is empty
  if (!list1) return list2;
  if (!list2) return list1;

  let head = list1;
  let temp = list1;
  list1 = list1.next;
  //loop til lists are empty and add nodes 
  while(list1 && list2) {
    temp.next = list2;
    list2 = list2.next; 
    temp = temp.next; 

    temp.next = list1;
    list1 = list1.next;
    temp = temp.next;
  }
  //if one is empty take the other and add it to the merged list 
  temp.next = list1 ? list1 : list2; 

  return head; 
}

/*
merge two linked lists alternating each node 
start with list1 first node 
create new linked list  

*/

var list1 = new Node(4)
list1.next = 5
list1.next.next = 6;
var list2 = new Node(1)
list2.next = 2
list2.next.next = 3;
//console.log(list2); 
console.log(zip(list1, list2))

























module.exports = {Node: Node, zip: zip};
