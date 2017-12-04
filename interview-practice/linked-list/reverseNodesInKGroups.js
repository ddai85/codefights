// Definition for singly-linked list:
function ListNode(x) {
  this.value = x;
  this.next = null;
}
//
function reverseNodesInKGroups(l, k) {
  let kArr = [];

  let currentNode = l;
  let kCount = 1;
  let tail = null;
  let head = null;
  
  while (currentNode !== null) {
    if (kCount < k) {
      kArr.push(currentNode);
      currentNode = currentNode.next;
      kCount++;
      continue;
    } else {
      kCount = 1;
      kArr.push(currentNode);
      currentNode = currentNode.next;
      let nextNode = null;
      for (let j = 0; j < kArr.length; j++) {
        if (tail !== null && j === k - 1) {
          tail.next = kArr[j];
          tail = kArr[0];
        }
        if (tail === null && j === k - 1) {
          head = kArr[j];
          tail = kArr[0];
        }
        kArr[j].next = nextNode;
        nextNode = kArr[j];
      }
      kArr = [];
      continue;
    }
  }
  
  if (kArr.length !== 0) {
    tail.next = kArr[0];
  }

  return head;
}
  
let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);
let node5 = new ListNode(5);
let node6 = new ListNode(6);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;

console.log(JSON.stringify(reverseNodesInKGroups(node1, 4)));