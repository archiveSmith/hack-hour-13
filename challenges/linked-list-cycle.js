/**
 * We are familar with linked lists being linear and terminating:
 *
 * A->B->C->D
 *
 * However, linked lists can also have cyclical references:
 *
 * A->B->C->D
 *    ^     |
 *    |     V
 *    G<-F<-E
 *
 * Create a function that accepts a linked list and returns true if the linked list has a cyclical reference
 *
 * var node1 = new Node('1');
 * var node2 = node1.next = new Node('2');
 * var node3 = node2.next = new Node('3');
 * var node4 = node3.next = new Node('4');
 * var node5 = node4.next = new Node('5');
 * hasCycle(node1); // => false
 * node5.next = node2;
 * hasCycle(node1); // => true
 *
 * Challenge 1: Do this in linear time
 * Challenge 2: Do this in constant space
 * Challenge 3: Do not mutate the original nodes in any way
 *
 */

var Node = function(value) {
  this.value = value;
  this.next = null;
}

//linear time but no constant space
function hasCycle(head) {
  let cache = [];
  while(head) {
    if (!head.next) {return false}
    if (cache.indexOf(head) !== -1) {
      return true;
    } 
    cache.push(head);
    head = head.next;
  }
}

//add property to list called visited; if has visited, then return true;
function hasCycle2(head) {
  
}
 
//tortise and hare: hare moves 2 spaces for every one tortise, if they meet up then you know it is cyclical
function hasCycle3(head) {
  if (head === null || head.next === null) {return false}
  
  let tortise = head; 
  let hare = head.next;
  while (tortise.value !== hare.value) {
    if (hare.next === null || hare === null) {return false}
  
    torise = tortise.next;
    hare = hare.next.next;
  }

  return true;
}


///////////////////////////////////////////////////
let list1 = new Node(1);
let list2 = list1.next = new Node(2);
let list3 = list2.next = new Node(3);
let list4 = list3.next = new Node(4);
list4.next = list2;
//--------------------------

//console.log( list1 )
console.log( hasCycle3(list1) )


/*
if there is always a head.next then it is cyclical
if (head.next === null) {return false (it is not cyclical)}

how to avoid infinite loop? 
if head.next === one of the previous nodes 
*/









module.exports = {Node: Node, hasCycle: hasCycle}
