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
    if (!head) return null;
    let currNode = head;
    let listArr = [];
    while (currNode) {
        listArr.push(currNode);
        currNode = currNode.next;
    }
    for (let i = listArr.length - 1; i >= 0; i -= 1) {
        listArr[i].next = i ? listArr[i-1] : null;
    }
    return listArr[listArr.length - 1];
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};