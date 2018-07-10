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

// //solution 1: could be almost two passes.
// function kthToLastNode(k, head) {
	
// 	let curr = head;
// 	let length = 0;

// 	while (curr.next) {
// 	  curr = curr.next;
// 	  length++;
// 	}
	
// 	curr = head;

// 	const nodeNeeded = length - 1;

// 	if (nodeNeeded < 0) return;

// 	for (let i = 0; i < nodeNeeded; i++) {
// 		curr = curr.next;
//   }
// 	return curr.value;
// }

//solution 2: could ALSO be almost two passes. Steps are just in a 
//different order. MIGHT be faster if your processor uses a 'least recently
//used' replacement policy for caching right on the processor, i.e. it 
//replaces data that has been used least recently. The two passes accessing
//data are closer in time in this approach and data may not have been 
//replaced already in local storage.
function kthToLastNode(k, head) {
  //edgecases
  if (!k || !head || k < 1 || !Number.isInteger(k)) return;
  
  let leftPointer = head;
  let rightPointer = head;
  
  //we have a 'stick' the length of k. We slide it along the list and 
  //when the right hand end gets to the end of the list, the left hand end 
  //will be at the node we want to return.
	//move the right hand point along the list according to the length of k.
  for (let i = 0; i < k - 1; i += 1) {
    if (!rightPointer.next) return; 
    //^means that k is larger than length of list;
    rightPointer = rightPointer.next;
  }
  
	//move both pointers along.
  while (rightPointer.next) {
    leftPointer = leftPointer.next;
    rightPointer = rightPointer.next;
  }
	//when there is no rightPointer.next, our leftPointer is at our value.
  return leftPointer.value;
}


module.exports = {Node: Node, kthToLastNode: kthToLastNode};

// const a = new Node('A');
// const b = new Node('B');
// const c = new Node('C');
// const d = new Node('D');
// const e = new Node('E');
 
// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;

// console.log(kthToLastNode(2, a));