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
    if (head === null) return undefined;
    if (head.next === null) return head;
    let arr = [];
    for (let i = head; i; i = i.next) {
        arr.push(i);
    }
		arr.reverse();
    head = arr[0];
    for (let j = 0; i < arr.length; i++) {
        arr[i].next = arr[i + 1];
        if (i === arr.length - 1) {
            arr[i].next = null;
        }
    }
    return head;
}

module.exports = { Node: Node, reverseLinkedList: reverseLinkedList };
