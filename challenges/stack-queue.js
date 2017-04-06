/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
    let stack = [];

    Stack.prototype.pop = function() {
        return this.stack.pop();
    }
    Stack.prototype.push = function(item) {
        return this.stock.push(item);
    }
}


/**
* Queue Class
*/


function Queue() {
    let stack1 = new Stack();
    let stack2 = new Stack();

    let queue = [].push(stack1);
    queue = queue.push(stack2);

    Queue.prototype.shift = function () {
        return queue.shift();
    }
    Queue.prototype.push = function(item) {
        return queue.push(item);
    }
}

module.exports = {Stack: Stack, Queue: Queue};
