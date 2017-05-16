/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack(value) {
    this.storage = [];
    this.length = 0;

    this.push = function (value) {
        if (!stack) {
            this.storage[this.length] = value;
            this.length++;
        }
        else {
            this.storage[this.length] = value
            this.length++;
        }
    }

    this.pop = function () {
        let deleted = this.storage[this.length - 1];
        delete this.storage[this.length - 1];
        this.length--;
        return deleted;
    }
}


/**
* Queue Class
*/


function Queue(value) {

    let join = new Stack();
    let remove = new Stack();

    this.enqueue = (value) => {
        join.push(value);
    }

    this.dequeue = () => {
        if (!remove) {
            while (join) {
                remove.push(join.pop())
            }
        }
    }
    return remove.pop();
}

module.exports = { Stack: Stack, Queue: Queue };
