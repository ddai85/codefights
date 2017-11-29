// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function removeKFromList(l, k) {
  let firstNode = l;
  while (firstNode.value === k) {
    firstNode = firstNode.next || null;
  }

  let prevNode = firstNode;
  let currentNode = firstNode.next;

  while (currentNode) {
    if (currentNode.value === k) {
      prevNode.next = currentNode.next || null;
    }
    prevNode = currentNode;
    currentNode = currentNode.next;
  }

  return firstNode;
}

function ListNode(x) {
  this.value = x;
  this.next = null;
}

let node1 = new ListNode(1000);
let node2 = new ListNode(1000);
// let node3 = new ListNode(2);
// let node4 = new ListNode(3);
// let node5 = new ListNode(4);
// let node6 = new ListNode(5);
node1.next = node2;
node2.next = null;


console.log(removeKFromList(node1, 1000));