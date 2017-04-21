/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (2 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 7 -> 0 -> 8
 *
 * The 7 is the ones digit (2 + 5).
 * The 0 is the tens digit (1 + 9, carry the 1).
 * The 8 is the hundreds digit (1 carried over + 5 + 2).
 *
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList1(l1, l2) {
  let sum = l1.value + l2.value;
  let remainder = sum >= 10 ? sum - 10 : null
  if (remainder) {
    sum = remainder;
    l1.next.value += remainder; 
  }
  let result = new Node(sum)
  while(l1.next && l2.next) {
    l1 = l1.next;
    l2 = l2.next;
    //console.log(l1)
    let sum = l1.value + l2.value;
    let remainder = sum >= 10 ? sum - 10 : null;
    if (remainder && l1.next) {
      sum = remainder;
      l1.next.value += remainder; 
    }
    result.next = new Node(sum);
    //result.next = result.next.next;
 
  }
  return result;
}

function addLinkedList(l1, l2) {
  let num1 = '', num2 = '';
  let zero = new Node(0);

  while(list1 !== zero || list2 !== zero) {
    num1 = list1.value.toString() + num1;
    num2 = list2.value.toString() + num2;

    list1 = list1.next || zero;
    list2 = list2.next || zero;
  }

  let sum = parseInt(num1) + parseInt(num2);
  sum = sum.toString().split('');

  let head = new Node(parseInt(sum.pop()));
  let node = head;

  while(sum.length) {
    node.next = new Node(parseInt(sum.pop()));
    node = node.next;
  }
  return head;
}


/////////////////////TESTING//////////////////////////////////
let list1 = new Node(5);
list1b = new Node(2);
list1c = new Node(3);
list1.next = list1b;
list1b.next = list1c;
let list2 = new Node(5);
list2b = new Node(6);
list2c = new Node(7);
list2.next = list2b;
list2b.next = list2c;
//----------------------------------------
console.log( addLinkedList(list1, list2) )
//addLinkedList(list1, list2)

/*
input: 2 linked lists
output: 1 linked list 
----------------------------
combine nodes by adding them, 
carry over extra digits to the node to its right
------------------------
add curr node in each list, 
if greater than 10, take extra and add it to the curr.next
 
*/



module.exports = {Node: Node, addLinkedList: addLinkedList};
