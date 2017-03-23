/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
	var merged = new Node(null);
	var prev = merged;
	if(l1){
		while(l1 !== null && l2 !== null){
			prev.next = l1;
			l1 = l1.next;
			prev.next = l2;
			l2 = l2.next;
		}
		return merged.next;
	} else{
		while(l2 !== null && l1 !== null){
			prev.next = l2;
			l2 = l2.next;
			prev.next = l1;
			l1 = l1.next;
		}
		return merged.next;
	}
}

module.exports = {Node: Node, zip: zip};
