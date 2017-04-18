/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.value = {};
  this.length = 0;
  this.push = (el) => {
    this.value[this.length] = el;
    this.length += 1;
  };
  this.pop = () => {
    if (this.length) {
      let result = this.value[this.length - 1];
      delete this.value[this.length - 1];
      this.length -= 1;
      return result;
    }
    return undefined;
  };
}


/**
* Queue Class
*/


function Queue() {
  const enStack = new Stack();
  const deStack = new Stack();
  this.length = deStack.length;
  this.enqueue = (el) => {
    for (let i = 0; i < this.length; i += 1) {
      enStack.push(deStack.pop());
    }
    enStack.push(el);
    for (let i = 0; i <= this.length; i += 1) {
      deStack.push(enStack.pop());
    }
    this.length = deStack.length;
  }
  this.dequeue = () => {
    if (this.length) {
      let result = deStack.pop();
      this.length = deStack.length;
      return result;
    }
    return undefined;
  }
}

module.exports = {Stack: Stack, Queue: Queue};
