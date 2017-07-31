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
    let i = head;
    let j = head;
    const cache = {};

    for (let i = head; i; i = i.next) {
        if (!cache[i.value]) {
            cache[i.value] = true;
            j = i;
        } else {
            j.next = i.next;
        }
    }

    return head;
}

//slower but don't use extra object
function deleteDups2(head) {
    for(let i = head; i; i = i.next) {
        let j = i;
        while (j.next) {
            if(j.next.value === i.value) {
                j.next = j.next.next;
            } 
            else {
                j = j.next;
            }
        }
    }
    return head;
}

module.exports = deleteDups;
