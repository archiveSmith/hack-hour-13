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

//Iterative
function zip(l1, l2) {
 let templ1 = {};
 let templ2 = {};
 let dest = l1;
 while (l2 != null) {
   templ1 = dest.next;  //templ1 = 3
   if (dest.next === null) {
     dest.next = l2
     break;
   }
   else {
     dest.next = l2; // dest.next = 2
     templ2 = l2.next; //
     l2.next = templ1;
     l2 = templ2;
     dest = templ1;
   }
 }
 return l1;
};

let l1t = {value:"1", next: {value:"3", next:{value:"5", next:{value:"6", next:null}}}};
let l2t = {value:"2", next: {value:"4", next:null}};


//Recursion
function zip (l1, l2) {
  if (!l1) {
    return l2;
  }
  if (!l2) {
    return l1;
  }
  l1.next = zip(l2, l1.next);
  return l1;
}



module.exports = {Node: Node, zip: zip};
