function Stack() {
  this.storage = {};
  this.length = 0;
}

Stack.prototype.push = function(input) {
  this.storage[this.length] = input;
  this.length ++;
}

Stack.prototype.pop = function() {
  let last = this.storage[this.length - 1];
  delete this.storage[this.length - 1];
  this.length --;
  return last;
}

function Queue() {
  this.stack1 = new Stack();
  this.stack2 = new Stack();
}

Queue.prototype.enqueue = function(input) {
  this.stack1.push(input);
}

Queue.prototype.dequeue = function() {
  if(this.stack2.length === 0) {
    while(this.stack1.length > 0) {
      let temp = this.stack1.pop();
      this.stack2.push(temp);
    }
  }
  return this.stack2.pop();
}


let test = new Queue();
test.enqueue('a');
test.enqueue('b');
console.log('hey this is the queue ', test);
console.log('dequeu once ', test.dequeue());
console.log('dequeu second time, expec b ', test.dequeue());
// let ans  = test.dequeue();
// console.log('there ya go ', ans );