/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  const storage = [];

  this.push = function() {
      storage.push.apply(storage, arguments);
  };
  this.pop = function() {
      return storage.pop.apply(storage, arguments);
  };
}


/**
* Queue Class
*/


function Queue() {
  const inbox = new Stack();
  const outbox = new Stack();

  this.eneque = function() {
      inbox.push.apply(inbox, arguments);
  };
  this.dequeue = function() {
      if (outbox.size() === 0) {
          while (inbox.size())
              outbox.push(inbox.pop());
      }
      return outbox.pop();
  };
}

module.exports = {Stack: Stack, Queue: Queue};
