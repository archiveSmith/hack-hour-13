/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.val = [];
  this.length = 0;
  this.push = (el) => {
    this.val.push(el);
    return ++this.length;
  }
  this.pop = () => {
    if (this.length) this.length--;
    return this.val.pop();
  }
}


/**
* Queue Class
*/


function Queue() {
  this.stack1 = new Stack();
  this.stack2 = new Stack();
  this.length = 0;
  this.enqueue = (el) => {
    while (this.stack1.length) {
      this.stack2.push(this.stack1.pop());
    }
    this.stack1.push(el);
    while (this.stack2.length) {
      this.stack1.push(this.stack2.pop());
    }
    return ++this.length;
  }
  this.dequeue = () => {
    return this.stack1.pop();
  }
}

module.exports = {Stack: Stack, Queue: Queue};
