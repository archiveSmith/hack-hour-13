/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

 // const link1 = new Node(1);
 // link1.next = new Node(3);
 //
 // const link2 = new Node(2);
 // link2.next = new Node(4);

 function Node(val) {
   this.value = val;
   this.next = null;
 }

 function zip (l1, l2) {
   let zipList;
   let temp1;
   let temp2;

   while (l2.next) {
     temp1 = l1.next;
     temp2 = l2.next;

     l1.next = l2;
     l2.next = temp1;
     temp1.next = temp2;
   }
   zipList = l1;
   return zipList;
 }

module.exports = {Node: Node, zip: zip};
