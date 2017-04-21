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

// function addLinkedList(l1, l2) {
//   let initVal = l1.value + l2.value; 
//   let myList =new Node(initVal);
//   let currl1 = l1.next;
//   let currl2 = l2.next;
//   let currMyList = myList.next; 
//   while(currl1.value !== null && curr2.value !== null){
//     currMyList.value = (currl1.value + curr2.value)
//     currMyList = currMyList.next; 
//     currl1  = currl1.next; 
//     currl2 = currl2.next; 
//   }
  
//   return myList;
 


//SOLUTION
function addLinkedList(l1, l2){
  let num1 = '', num2 = '';
  let zero = new Node(0);

  while(list1 !== zero || list2 !== zero){
    num1 = list1.value.toString() + num1; 
    num2 = list2.value.toString() + num2; 

    list1 = list1.next || zero;
    list2 = list2.next || zero;
  }

  let sum = parseInt(num1) + parseInt(num2);
  sum = sum.toString().split('');

  let head = new Node(parseInt(sum.pop()))
  let node = head;

  while(sum.length){
    node.next = new Node(parseInt(sum.pop()))
    node = node.next
  }
  return head; 
}



// MY SOLUTION 
function addLinkedList(l1, l2){
  let arr1 = []; 
  let arr2 = []; 
  let l1Val = l1;
  let l2Val = l2;
  while(l1Val.val !== null){
    arr1.push(l1Val.val)
    l1Val = this.next;
  }
  while(l2Val.val !== null){
    arr2.push(l2Val.val)
    l2Val = this.next;
  }
  let list1 = l1Val.reverse().join("");
  let list2 = l2Val.reverse().join("");
  let lastList =list2 + list1
  lastList = lastList.reverse();
  let myLL = new Node; 
  for(let i = 0 ; i < myList.length; i++){
    myLL.value = i; 
  }
}



module.exports = {Node: Node, addLinkedList: addLinkedList};
