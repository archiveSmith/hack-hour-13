/*
Create a doubly linked list with an add and remove method
 */

// function LinkedList() {
//   this.head = null;
//   this.tail = null;
// }

// function Node(val) {
//   this.val = val;
//   this.next = null;
//   this.prev = null;
// }

// /*
// Adds a node to the end of the list
//  */
// LinkedList.prototype.add = function(val) {
//   let node = new Node(val)
//   if(!this.head){
//     this.head = val;
//     this.tail = val;
//     this.val = val;
//   }else{
//     this.val = val
//     this.next = null;
//     this.prev = this.tail;
//     this.prev.next = node;
//     this.tail = node;
//     this.tail.next = null;
//   }



// };

// /*
// Removes the first node with the inputted value
//  */
// LinkedList.prototype.remove = function(val) {
//   console.log(this)
// };

// makes a wrapper
function linkedList(){
  this.head = null;
  this.tail = null;
}

//makes bunnies that point to prev & nex bunnies 
function Bunny(val){
  this.val = val + ' fluffy bunn' + (val > 1 ? 'ies' : 'y'); 
  this.next = null;
  this.prev = null;
}

linkedList.prototype.add = function(val){
  const newNode = new Bunny(val);
  //start the list of if there isn't one
  if(!this.head) {
    this.head = this.tail = new Node;
    return;
  }

  //pop it on the end
  newNode.prev = this.tail;
  this.tail.next = newNode;
  this.tail = newNode
}


//removes first bunny with inputted val

LinkedList.prototype.remove = function(val){
  let node = this.head;
  if(!node) return;

  //hande head case: reset head

  if(node.val === val){
    if(node.next) node.next.prev = null;
    this.head = node.next
    delete node;
    return;
  }
  while(node){
  if(node.val === val){
    node.prev.next= node.next;
    if(node === this.tail){
      this.tail = node.prev;
      this.tail.next = null;
    }
    //kill bunny
    // no need to deltet node; javascript with garbage collect the node
    delete node;
    return
  }
}
}


module.exports = LinkedList;

let list = new LinkedList
list.add(5)
list.add(8)
list.add(100)
list.remove(100)
console.log(list)