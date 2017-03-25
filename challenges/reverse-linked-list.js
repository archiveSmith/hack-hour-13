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
    let headNode = head;
    let headNodeTail = head;
    let targetNode = head.next;
    let headTemp = {};
    let headTempTail = {};
    while (targetNode !== null) {
        headTemp = headNode; 
        headNodeTail.next = targetNode.next;
        targetNode.next = headTemp;
        headNode = targetNode;
        targetNode = headNodeTail.next;
    }
    return headNode;
}

// node1 = new Node(1);
// node1.next = (new Node(2));
// node1.next.next = (new Node(3));
// node1.next.next.next = (new Node(4));
// node1.next.next.next.next = (new Node(5));
// console.log(reverseLinkedList(node1));

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
