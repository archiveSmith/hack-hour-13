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
    if (!head) return 'Error: input must be a node';

    //create an array to hold our LinkedList.
    let nodes = [];

    //iterate through the LinkedList, adding to the array
    while(head){
        nodes.push(head);
        head = head.next;
    }
    nodes.push(head);
    nodes[0].next = null;

    let holder;
    while(nodes.length) {
        if (nodes.length > 0) ? (nodes.pop()).next = nodes[nodes.length-1] : (nodes.pop()).next = nodes[0]
    }
    head = nodes[0];
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};

let holder;
let head;

for(let i = 10; i > 0 ; i -=1 ){
    let node = new Node(i);
    console.log(node.value);
    if (holder) node.next = holder
    holder = node;
    if (i === 1) head = node;
}

console.log('Reversing...');

reverseLinkedList(head);

let originalHead = head;


while (head){
    console.log(head.value);
    head = head.next;
}
console.log(head);

head = originalHead;
