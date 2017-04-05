/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.stack = [];

  this.push = (val) => {
    this.stack.push(val);
  }

  this.pop = (val) => {
    return this.stack.pop();
  }
}

/**
* Queue Class
*/


function Queue() {
  this.stack_A = new Stack();
  this.stack_B = new Stack();

  this.printVals = () =>{
    console.log("Stack A:",this.stack_A.stack);
    console.log("Stack B:",this.stack_B.stack);
  }

  this.enqueue = (...args) => {
    for (let i = 0; i < args.length; i +=1){
      this.stack_A.push(args[i]);
    }
  }

  this.dequeue = (val) => {

    while (this.stack_A.stack.length !== 0) this.stack_B.push(this.stack_A.pop());

    let returnVal = this.stack_B.pop();

    while(!this.stack_B.stack.length) this.stack_A.push(this.stack_B.pop());

    return returnVal;
  }
}


let myQueue = new Queue();
myQueue.enqueue(1,2,3,4,5,6);
console.log("Return:", myQueue.dequeue());
console.log("Return:", myQueue.dequeue());
module.exports = {Stack: Stack, Queue: Queue};
