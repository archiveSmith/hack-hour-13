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

function hasCycle(head) {
  //Floyd's cycle-finding algorithm!
  //Make two pointers and have them move at different speeds. Move one forward
  //by one node and the other forward by two nodes.
  //If the list has a loop, they will definitely meet,
  //else faster pointer.next will become null and there is no loop.
  if (head === null) return false;
  let pointerSlow, pointerFast;
  pointerSlow = pointerFast = head;
  
  while(true) {
    //1 hop
    pointerSlow = pointerSlow.next;

    //2 hops
    if (pointerFast.next !== null)
      pointerFast = pointerFast.next.next;
    else 
      //next node is null so there is no loop.
      return false;

    //if either hits null...no loop
    if (pointerSlow === null || pointerFast === null) return false;

    //if the two ever meet...we must have a loop.
    if (pointerSlow === pointerFast) return true;
  }
}

module.exports = {Node: Node, hasCycle: hasCycle}
