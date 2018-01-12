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

//this one is better:
function zip(l1,l2) {
	if (!l1) return l2;
	if (!l2) return l1;

	let head = l1;
	let temp = l1;

	l1 = l1.next;

	while(l1 && l2) {
		temp.next = l2;
		l2 = l2.next;
		temp = temp.next;
		temp.next = l1;
		l1 = l1.next;
		temp = temp.next;
	}

	temp.next = l2 ? l2 : l1;
	return head;
}

// function zip(l1, l2) {
// 	// if one list is empty
//   if (!l1) return l2;
//   else if (!l2) return l1;
  
//   let curr1 = l1;
//   let curr2 = l2;
//   let temp1 = l1.next;
// 	let temp2 = l2.next;
	 
//   while (curr1 && curr2) {
//     curr1.next = curr2;
//     if (temp1) curr2.next = temp1;
//     curr1 = temp1;
//     curr2 = temp2;
//     if (temp1) temp1 = temp1.next;
//     if (temp2) temp2 = temp2.next;
//   }
//   return l1;
// };

//test:
// const A = new Node('A');
// const B = new Node('B');
// const C = new Node('C');
// const D = new Node('D');
// const E = new Node('E');

// A.next = B;
// B.next = C;
// C.next = D;
// D.next = E;

// const M = new Node('M');
// const N = new Node('N');
// const O = new Node('O');
// const P = new Node('P');
// const Q = new Node('Q');

// M.next = N;
// N.next = O;
// O.next = P;
// P.next = Q;

// let result = zip(A, M);

// function printList(node) {
//    var curr = node;
//    while (curr) {
//      console.log(curr.value);
//      curr = curr.next;
//    }
//  }
 
// printList(result);

module.exports = {Node: Node, zip: zip};


