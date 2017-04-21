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
//   let resultList = null;
//   let currResult = null;
//   let currl1 = l1;
//   let currl2 = l2;

//   let carryOver = 0;

//   while (currl1 && currl2) {
//     console.log('curr l1 ', currl1);
//     console.log('curr l2', currl2);
//     console.log('curr Result ', resultList);
//     let sum = currl1.value + currl2.value + carryOver;

//     if (sum >= 10) {
//       if (!resultList) {
//         resultList = new Node(sum - 10);
//       } else {
//         resultList.next = new Node(sum - 10);
//       }
//       carryOver = sum % 10;
//     } else {
//       if (!resultList) {
//         resultList = new Node(sum);
//       } else {
//         resultList = new Node(sum);
//       }
//       carryOver = 0;
//     }

//     currl1 = currl1.next;
//     currl2 = currl2.next;
//     currResult = currResult.next;
//   }

//   if (currl1) currResult.next = currl1;
//   else if (currl2) currResult.next = currl2;

//   return resultList;
// }




//solution

function addLinkedList(list1, list2, carryover) {
  let num1 = '', num2 = '';
  let zero = new Node(0);

  while (list1 !== zero || list2 !== zero) {
    num1 = list1.value.toString() + num1;
    num2 = list2.value.toString() + num2;

    list1 = list1.next || zero;
    list2 = list2.next || zero;
  }

  let sum = parseInt(num1) + parseInt(num2);
  sum = sum.toString().split('');

  let head = new Node(parseInt(sum.pop()));
  let node = head;

  while (sum.length) {
    node.next = new Node(parseInt(sum.pop()));
    node = node.next;
  }

  return head;
}



module.exports = { Node: Node, addLinkedList: addLinkedList };



let l1 = new Node(1);
l1.next = new Node(3);
l1.next.next = new Node(5);

let l2 = new Node(1);
l2.next = new Node(3);
l2.next.next = new Node(5);

console.log(addLinkedList(l1, l2));