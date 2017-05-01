
/**
 * Write a function deleteDups that removes duplicates from an unsorted linked list.
 *
 * Example:
 * 1->2->3->3
 *
 * deleteDups(head); -> 1->2->3
 *
 * Extra:
 * How would you solve this problem if a temporary buffer is not allowed?
 */

function Node(value){
  this.value = value;
  this.next = null;
}

function deleteDups(head) {
  let curr = head;
  let prev = null;
  let cache = {};
  while(curr) {
    //if node is in cache, cut it out of linked list 
    if (cache[curr.value]) {
      curr = curr.next
      prev.next = curr;
    } else {
      cache[curr.value] = true;
      prev = curr;
      curr = curr.next;
    }
  }
  return head;
}

//-------------------------------------------
function deleteDups2(head) {
  const cache = {};
  let j;
  for (let i = head; i; i = i.next) {
    if (!cache[i.value]) {
      cache[i.value] = true;
      j = i;
    } else {
      j.next = i.next;
    }
  }
  return JSON.stringify(head);
}


//---------this way is slower than using cache (quadratic) but doesn't use an extra object so constant space------------
function deleteDups3(head) {
  for (let i = head; i; i = i.next) {
    let j = i;
    while (j.next) {
      if (j.next.value === i.value) {
        j.next = j.next.next;
      } else {
        j = j.next;
      }
    }
  }
  return head;
}


/////////////////////////////////////////////
let list1 = new Node(5);
let list2 = list1.next = new Node(3);
let list3 = list2.next = new Node(1);
let list4 = list3.next = new Node(1);
let list5 = list4.next = new Node(5);

console.log(  deleteDups(list1) )
/*
INPUT: unsorted linkedlist
OUTPUT: linkedlist with duplicates removed

make cache to hold values and key of true
set previous and curr values;
loop thru list and check cache for each value;
  if it is there (set previous.next to curr.next: i.e. delete it)
  else (keep going)
*/




module.exports = deleteDups;
