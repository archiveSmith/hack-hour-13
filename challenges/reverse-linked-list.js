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
    function findTail(node) {
        if (node.next === null) return node;
        return findTail(node.next);
    }
    function find2ndToLast(node) {
        if (node.next === null) return null;
        if (node.next.next === null) return node;
        return find2ndToLast(node.next);
    }
    let tail = findTail(head);
    function recurse(node) {
        if (!node) return;
        let tail = findTail(node);
        let secondToLast = find2ndToLast(node)
        if (secondToLast === null) return;
        tail.next = secondToLast;
        secondToLast.next = null;
        recurse(head);
    }
    recurse(head);
    return tail;
}

module.exports = { Node: Node, reverseLinkedList: reverseLinkedList };
