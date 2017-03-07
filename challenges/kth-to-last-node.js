/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */


function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
  //count the total number of nodes in linked list
  //find the index of the value you want to return, (total lenghth - k)
  //iterate through entire list again, returning the value of desired index
  
  
  let len = 1;
  let current = head;

  while(current.next){
    len++;
    current = current.next;
  }

  if(k > len) return undefined;

  let index = len-k + 1;
  let count = 1;

  current = head;
  while(current.next){
    if(count === index){
       return current.value;
    }
    count++;
    current = current.next;
  }

  return undefined;

}

// module.exports = {Node: Node, kthToLastNode: kthToLastNode};


const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');
 
 a.next = b;
 b.next = c;
 c.next = d;
 d.next = e;

 console.log(kthToLastNode(2, a));