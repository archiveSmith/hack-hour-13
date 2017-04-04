/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
    this.contents = [];
}


Stack.protoype.push = (a) => {
    this.contents.push(a);
}

Stack.prototype.pop = () => {
    return this.contents.pop();
}


/**
* Queue Class
*/


function Queue(stack1, stack2) {
    this.contents = [];

    let nextIs1 = true;
    while (stack1 && stack2) {
        if (nextIs1) Queue.push(stack1.pop());
        else Queue.push(stack2.pop());
    }

    if (stack1) {
        while (stack1) {
            Queue.push(stack1.pop());
        }
    } else {
        while (stack2) {
            Queue.push(stack2.pop());
        }
    }
}

Queue.prototype.push = (a) => {
    this.contents.push(a);
}

Queue.prototype.unshift = () => {
    return this.contents.unshif();
}


module.exports = { Stack: Stack, Queue: Queue };
