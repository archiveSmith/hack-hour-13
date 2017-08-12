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

// Input
  // two parameters
    // integer - k (kth to the last node)
    // head of linked list

// Output
  // return value of desired node (kth to last)

// Edge cases
  // return undefined if k is not an integer
  // return undefined if head is not a Node
  // return undefined if k is less than or eqaul to 0
/*
Solution 1 psuedocode - find the length of linked list
  Check edge cases
  Get the length of linked list
    Declare length variable for keeping track of linked list length
    Declare currNode variable and set equal to the head
    Declare count variable to keep track of our second while loop
    Declare a result variable for returning the final value
    First, iterate through linked list using a while loop
      Loop through until currNode is undefined
      Each iteration increment length variable
      Set currNode equal to the next Node (curr.next)
  Check if k value is valid compared to the length
    Declare variable i and set it eqaul to length - k
    Reset currNode eqaul to head
    if condition that checks if i less than 0 (edge case)
      return undefined
    run another while loop with i as condition
      each iteration curr is set equal to curr.next
      decrement i
      if i is undefined stop and curr will be set equal to kth to last Node
    Return value of current node (curr.value)
  */
  // Solution 3 psuedocode - lead and follow approach
    // declare variable lead set equal to head
    // declare variable follow set equal to head
    // loop through linked list until we reach k, using the lead variable to keep track of Nodes
    // If the loop makes it to k, start a new loop and continue iterating the lead
    // variable and start a follow variable from the head Node.
    // Once the lead variable hits null, the follow variable will have hit the the
    // correct Node.
    // Return the follow Node's value.


function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
  let lead = head;
  let follow = head;

  let i;
  for (i = 0; i < k && lead; i += 1) {
    lead = lead.next;
  }

  if (i < k && !lead) return undefined;

  while (lead && follow) {
    lead = lead.next;
    follow = follow.next;
  }

  return follow.value;
}


// console.log(kthToLastNode(2, a));

module.exports = { Node: Node, kthToLastNode: kthToLastNode };
