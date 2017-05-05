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
    //create a stack full of all the nodes 
    let stack = [];
    let currentNode = head;
    while (currentNode !== null) {
        stack.push(currentNode)
        currentNode = currentNode.next;
    }
    // loop through the array of nodes starting from the end or 'tail' node
   for(let i = stack.length -1; i > 0; i--){
       //break case when we reach the tail of our new list
       if(i - 1 < 0){
           stack[i].next = null;
           return stack[stack.length - 1]
       }
       //set the tail node to point to the previous node
       stack[i].next = stack[i-1]; 
   }
}



//Stragety Number Two 

//     //iterate through the linkedlist until the last node points to null
//     while (head.next !== null) {
//         let previousVal = head.next;
//         let currentVal = head.next.next;
//         //At the last node, point the next pointer to the previous currentNode
//         if (currentVal === null) {
//             currenntVal = previousVal;
//             //point the previous node to null
//             previousVal = null;
//         }
//         head.next = currentVal;
//         break;
//     }
//     if (head.next === null) return head;
//     //recursively call the function with the new list; 
//     reverseLinkedList(head)
// }


module.exports = { Node: Node, reverseLinkedList: reverseLinkedList };
