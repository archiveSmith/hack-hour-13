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
function Node(value) {
	this.value = value;
	this.next = null;
}

 /*
  create a current and previous pointers
  traverse the linked list
  if you haven't seen the value, then add it to the memory
  otherwise, delete that node aka previous.next = current.next
  */

function deleteDups(list) {
	let current = list;
	let memory = {};
	let previous;
	while(current) {
		if(current.value in memory) {
			previous.next = current.next;
		} else {
			memory[current.value] = true;
			previous = current;
		}
		current = current.next;
	}
}

let n1 = new Node(1);
let n2 = new Node(2);
let n3 = new Node(2);
let n4 = new Node(4);
n1.next = n2;
n2.next = n3;
n3.next = n4;

deleteDups(n1);
console.log('the new linkedList', JSON.stringify(n1));

module.exports = deleteDups;
