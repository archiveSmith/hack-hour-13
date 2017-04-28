/**
 * Write a function deleteDups that removes duplicates from an unsorted linked list.
 *
 * Example:
 * 1->2->3->3
 *
 * deleteDups(head); -> 1->2->3
 *
 * Extra:
 * How would you solve this problem if a temporary buffer is not allowed?
 */



function deleteDups(head) {
	// loop thru the linked list
	// create a map that will allow your to check for repititions
	// if the current nodes value is in the map then delete the current Node
	let currentNode = head;
	let counter = {};
	let dupNum;
	while(currentNode){
		if(currentNode.value in counter){
			dupNum = currentNode.value;
			counter[currentNode.value] ++;
		}
		else{
				counter[currentNode.value] = 1;
		}
		currentNode = currentNode.next;
	}
	// get the key
	currentNode = head;
	while(currentNode){
		if(currentNode.value === dupNum){
			currentNode = currentNode.next.next;
			break;
		}
		currentNode = currentNode.next;
	}
}


module.exports = deleteDups;
