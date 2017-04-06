/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.array = [];
  this.len = 0;
  return {
    len: () => {return this.len},
    push: (val) => {
      this.array.push(val);
      this.len += 1;
      return val;
    },
    pop: () => {
      this.len -= 1;
      return this.array.pop();
    }
  }
}


/**
* Queue Class
*/


function Queue() {
  this.stack1 = new Stack();
  this.stack2 = new Stack();
  return {
    enqueue: (val) => {
      return this.stack1.push(val);
    },
    dequeue: () => {
      if (this.stack1.len() === 0 && this.stack2.len() === 0) return undefined;
      while (this.stack1.len() > 0) {
        this.stack2.push(this.stack1.pop());
      }
      return this.stack2.pop();
    }
  }
}

module.exports = {Stack: Stack, Queue: Queue};
