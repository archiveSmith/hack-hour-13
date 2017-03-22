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
  //if both lists exist, set the l1 head's next value equal to the l2's head
  //instantiate two placeholder variables that will temporarily hold next values so we can properly zip without losing place
  //create a while loop while BOTH lists still have next nodes
  
  //edge cases, if neither exist, or only one exists, return the one that does exist.
  if(!l1 && !l2) return null;
  if (!l1 || !l2) {
    console.log("one value registered as null or undefined");
    if (!l1) return l2;
    else return l1;
  }

  let headNode = l1;
  let l1Holder = l1;
  let l2Holder = l2;

  while(l1.next && l2.next){
    //save first link list's next value in a temp variable.
    l1Holder = l1.next;

    //set first linkedlist's next to the current index of the second linkedlist.
    l1.next = l2;

    //save second linkedlist's next value in a temp variable.
    l2Holder = l2.next;

    //set the second list's next to the placeholder saved from the first list.
    l2.next = l1Holder;

    //reset our positioning for both lists to prepare for another iteration of loop
    l1 = l1Holder;

    l2 = l2Holder;
  }
  if(!l1.next && !l2.next) l1.next = l2;
  else if(!l1.next && l2.next) l1.next = l2;
  else if(!l2.next && l1.next) {
    l1Holder = l1.next;
    l1.next = l2;
    l1.next.next = l1Holder;
  }

  return headNode;

};

// let A1 = new Node(1);
// let A2 = new Node(2);
// A1.next = A2;
// let A3 = new Node(3);
// A2.next = A3;
// // let A4 = new Node(4);
// // A3.next = A4;

// let B1 = new Node('a');
// let B2 = new Node('b');
// B1.next = B2;
// let B3 = new Node('c');
// B2.next = B3;
// let B4 = new Node('d');
// B3.next = B4;

// function printLinkedList(node){
//   let str = '';
//   while(node.next){
//     str+=node.value+" ";
//     node = node.next;
//   }
//   str+=node.value;
//   console.log(str);
// }

// printLinkedList(A1);
// printLinkedList(B1);

// //let zipped = zip(A1, B1);
// //printLinkedList(zipped);

// //edge-case if one of the linked lists is empty or undefined;
// let zipped = zip(A1, undefined);
// printLinkedList(zipped);

module.exports = {Node: Node, zip: zip};
