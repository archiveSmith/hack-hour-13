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
  // if one list is empty
  if (!l1) return l2;
  else if (!l2) return l1;

  var c1 = l1, n1 = c1.next,
      c2 = l2, n2 = c2.next;
    
  // iterate thru lists
  // will perform at least once, in the case that one list is only one long
  while (c1 && c2) {
    c1.next = c2;
    if (n1) c2.next = n1;
    c1 = n1;
    c2 = n2;
    if (n1) n1 = n1.next;
    if (n2) n2 = n2.next;
  }

  return l1;
};

// // too lazy to make Node methods...
// var list1 = new Node(1);
// list1.next = new Node(3);
// list1.next.next = new Node(5);
// list1.next.next.next = new Node(7);
// list1.next.next.next.next = new Node(8);

// var list2 = new Node(2);
// list2.next = new Node(4);
// list2.next.next = new Node(6);

// var res = zip(list1, list2);

// function printList(node) {
//   var curr = node;
//   while (curr) {
//     console.log(curr.value);
//     curr = curr.next;
//   }
// }

// printList(res);

module.exports = {Node: Node, zip: zip};
