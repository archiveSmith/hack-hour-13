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
  if (!head || !head.next) return head;

  var curr = head;
  var prev = null;
  var next;
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

var list = new Node(1);
list.next = new Node(2);
list.next.next = new Node(3);
console.log('ORIGINAL', list); 

// var bird = new Node('dodo');
// var cat = new Node('felix');
// var dog = new Node('gruffy');
// var duck = new Node('daffy');
// bird.next = cat;
// cat.next = dog;
// dog.next = duck;
// console.log('ORIGINAL', bird);

console.log( 'REVERSED', reverseLinkedList(list) )















module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
