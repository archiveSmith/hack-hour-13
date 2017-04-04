/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.stack = [];
  this.add = (value) => this.stack.push(value);
  this.get = () => this.stack.pop();
}


/**
* Queue Class
*/


function Queue() {
  this.stack = new Stack()
  const temp = new Stack()
  this.add = (value) => this.stack.add(value);
  this.get = () => {
    while (this.stack.stack.length > 0) {
      temp.add(this.stack.get()); 
    }
    let result = temp.get();
    while (temp.stack.length > 0) {
      this.stack.add(temp.get()); 
    }
    return result;
  } 

}

module.exports = {Stack: Stack, Queue: Queue};

