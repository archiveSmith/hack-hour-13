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
    // edge cases
    if (head === null) return undefined;
    if (head.next === null) return head;
    // initialize storage of nodes
    var myStack = [];
    var newHead;
    currNode = head;
    myStack.push(currNode);
    // add all nodes to storage
    while (currNode) {
        currNode = currNode.next;
        myStack.push(currNode);
        if (currNode.next === null) {
            newHead = currNode;
            break;
        }
    }
    // move through storage backwards
    myStack.reverse();
    for (let i = 0; i < myStack.length; i += 1) {
        myStack[i].next = myStack[i + 1];
        if (i === myStack.length - 1) {
            myStack[i].next = null;
        }
    }
    // return new head (which was the last tail)
    return myStack[0];
}

module.exports = { Node: Node, reverseLinkedList: reverseLinkedList };
