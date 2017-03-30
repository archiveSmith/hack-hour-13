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
  let curr = head;
  let prev = null;
  let next;
  while(curr) {
    console.log('ROUND---------------')
    next = curr.next;
    console.log('NEXT', next)
    curr.next = prev;
    console.log('CURR.NEXT', curr.next)
    prev = curr;
    console.log('PREV', prev)
    curr = next;
    console.log('CURR', curr);
  }
  head = prev;
  return head;

}

function reverseRecursion(head, prev = null) {
  if (!head) {return null};
  const forward = head.next;
  head.next = prev
}

// var list = new Node(3);
// list.next = new Node(4);
// list.next.next = new Node(5);
//console.log(list); 

var bird = {name: 'Dodo'};
var cat = {name: 'felix'};
var dog = {name: 'gruffy'};
var duck = {name: 'howard'};
var animals = {head: bird};
bird.next = cat;
cat.next = dog;
dog.next = duck;

console.log( reverseLinkedList(animals) )















module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
