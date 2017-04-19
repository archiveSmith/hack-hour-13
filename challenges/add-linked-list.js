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

function addLinkedList(l1, l2) {
  let l1_String = '';
  let l2_String = '';
  let headList;
  let tailList;

  while (l1) {
    l1_String += l1.value;
    l1 = l1.next;
  }

  while (l2) {
    l2_String += l2.value;
    l2 = l2.next;
  }

  // add them together and turn whole number into string again so that we can 
  added_List = (Number(l1_String) + Number(l2_String)).toString().split('');

  for (let i = added_List.length - 1; i >= 0; i -= 1) {
    if (i === added_List.length - 1) {
      newList = new Node(added_List[i]);
      tailList = newList;
    } else {
      tailList.next = new Node(Number(added_List[i]));
      tailList = tailList.next;
    }
  }

  return newList;
}

// var list1 = new Node(2);
// list1.next = new Node(1);
// list1.next.next = new Node(5);

// var list2 = new Node(5);
// list2.next = new Node(9);
// list2.next.next = new Node(2);

// console.log(addLinkedList(list1, list2));


// function addLinkedList(l1, l2) {
//   let carried = 0;
//   let tail = new Node(l1.value + l2.value);

//   l1 = l1.next;
//   l2 = l2.next;

//   // while both the linked list still exist
//   while (l1 || l2) {
//     let addedNum = l1.value + l2.value;
//     // check to see if the added nums are greater than eqal to 10, if so, carry it over
//     if (addedNum > 9) {
//       carried = addedNum - 9;
//       addedNum = carried
//     }

//     tail.next = new Node(addedNum);
//   }

// }

module.exports = { Node: Node, addLinkedList: addLinkedList };
