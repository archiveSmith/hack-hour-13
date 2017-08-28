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

function hasCycle(linkedlist) {
  if (linkedlist) {
     var curr = linkedlist;

     // Cycle through linked list
     while (curr) {

         // When we reach one we've visited before, 
         // exit the cycle and return true
         if (curr.visited) {
            return true;
         }
         curr.visited = true;
         curr = curr.next;
     }
  }

  // If we make it to the end of the linked list, return false
  return false;
}

// Implementation with tortois and hare
// here we set two nodes at different sppeds. If there is a cycle, then both nodes will be trapped in it, and at some
// point they will overlap
function hasCycleB(head) {
  
      // check if there's anything to set to tortoise and hare
      if (!head || !head.next) {
        return false;
      }
  
      //set tortoise and hare
      var tortoise = head;
      var hare = head.next;
  
      // keep going if hare hasn't reached end
      while (hare && hare.next) {
  
          // if hare laps tortoise there was a cycle
          if (tortoise === hare) {
              return true;
          }
          tortoise = tortoise.next;
          hare = hare.next.next;
      }
  
      return false;
  }

let n1 = new Node(1);
let n2 = new Node(2);
let n3 = new Node(3);
let n4 = new Node(4);

n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n2;

let result = hasCycle(n1);
console.log('the reuslt,', result );

module.exports = {Node: Node, hasCycle: hasCycle}
