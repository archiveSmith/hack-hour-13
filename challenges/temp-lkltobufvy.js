/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedList(head) {
    let prev = head; //will be beggining, and front of temp hence forth
    let temp = head.next; //first body next to head
    
    if (head.next = null) return head //edge case return to be change later.

    while (temp.next !== null) {
        prev.next = temp; //reverses the connection
        prev = temp; //sets the prev to point beggining of 2 node that need connection change
        temp = prev.next; //sets the temp to point end of 2 node that need tonnection change
        temp.next = prev;
    }

    //return the new head
    return temp;
}

const list = {
   value: 1,
   next: {
       value: 2,
       next: {
           value: 3,
           next: null
       }
   }
}

console.log(reverseLinkedList(list))

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
