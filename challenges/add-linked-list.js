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

//-----------------my way that works-----------------------
function addLinkedList(l1, l2) {
  if (!l1 && !l2) {return "no lists given"}
  if (!l1) {return l2}
  if (!l2) {return l1}
  // separate final answer from new list nodes being formed; otherwise will overwrite
  let answer = list = new Node(l1.value + l2.value);
  let remainder = 0;
  while (l1.next && l2.next) {
    l1 = l1.next;
    l2 = l2.next;
    let sum = l1.value + l2.value > 9 ? 0 : l1.value + l2.value;
    list.next = new Node(sum + remainder);
    l1.value + l2.value > 9 ? remainder = 1 : remainder = 0;
    console.log('LIST----', list);
    list = list.next;
  }
  return answer;
}

//------------------------------------------------------
var zero = new Node(0);
zero.next = zero;

function addLinkedList1(num1, num2, carryover) {
  var node1 = num1, node2 = num2, ansNode;
  var ansList = ansNode = new Node(node1.value + node2.value);
  while (node1 || node2) {
    node1 = node1.next || zero;
    node2 = node2.next || zero;
    if (node1 === zero && node2 === zero) break;
    ansNode.next = new Node(node1.value + node2.value);
    ansNode = ansNode.next;
  }
  //handle the carry-overs. this loop handles all but the last digit
  for (ansNode = ansList; ansNode.next; ansNode = ansNode.next) {
    ansNode.next.value += Math.floor(ansNode.value / 10);
    ansNode.value %= 10;
  }
  //handle the last digit
  if (ansNode.value >= 10) {
    ansNode.next = new Node(1);
    ansNode.value %= 10;
  }
  return ansList;
}
 
//--------------------------------------------------------------
function addLinkedList2(l1, l2) {
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

//-----------------------------------------------
function addLinkedList3(num1, num2, carryover) {
  var current1  = num1.next
  var current2  = num2.next
  var tempvalue;
  var answerlist;

  answerlist = new Node((num1.value + num2.value)%10);
  carryover = (num1.value + num2.value)/10<1 ? 0 : 1;

  while(current1 || current2 || carryover===1){
    var currentanswer = answerlist
    while(currentanswer.next){
      currentanswer = currentanswer.next
    }
    if (!current1 && !current2){
      currentanswer.next = new Node(carryover);
      carryover = 0;
    }
    else if (!current2){
      tempvalue = current1.value + carryover;
      currentanswer.next = new Node(tempvalue%10);
      carryover = tempvalue/10<1 ? 0 : 1;
      current1 = current1.next;
    }
    else if (!current1){
      tempvalue = current2.value + carryover;
      currentanswer.next = new Node(tempvalue%10);
      carryover = tempvalue/10<1 ? 0 : 1;
      current2 = current2.next;
    }
    else{
      tempvalue = current1.value + current2.value + carryover;
      currentanswer.next = new Node(tempvalue%10);
      carryover = tempvalue/10<1 ? 0 : 1;
      current1 = current1.next;
      current2 = current2.next;
    }
  }
  return answerlist;
}

/////////////////////TESTING//////////////////////////////////
let list1 = new Node(5);
list1b = new Node(2);
list1c = new Node(3);
list1.next = list1b;
list1b.next = list1c;
let list2 = new Node(5);
list2b = new Node(6);
list2c = new Node(1);
list2.next = list2b;
list2b.next = list2c;
//----------------------------------------
console.log( addLinkedList1(list1, list2) )
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



// module.exports = {Node: Node, addLinkedList: addLinkedList};
