// Definition for singly-linked list:
function ListNode(x) {
  this.value = x;
  this.next = null;
}
//
function mergeTwoLinkedLists(l1, l2) {
  
  let newList = new ListNode();
  if (l1.value < l2.value) {
      newList.value = l1.value;
      l1 = l1.next;
  } else {
      newList.value = l2.value;
      l2 = l2.next;
  }
  
  let firstNode = newList;
  
  let prevList = newList;
  
  while (l1 !== null || l2 !== null) {
      let newNode = new ListNode();
      
      if (l1 === null) {
          newNode.value = l2.value;
          l2 = l2.next;
          prevList.next = newNode;
          prevList = newNode;
          continue;
      }
      if (l2 === null) {
          newNode.value = l1.value;
          l1 = l1.next;
          prevList.next = newNode;
          prevList = newNode;
          continue;
      }
      
      
      if (l1.value < l2.value) {
          newNode.value = l1.value;
          l1 = l1.next;
      } else {
          newNode.value = l2.value;
          l2 = l2.next;
      }
      prevList.next = newNode;
      prevList = newNode;
  }
  
  return firstNode;
}

let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);
let node5 = new ListNode(5);
let node6 = new ListNode(6);
let node7 = new ListNode(7);

node1.next = node2;
node2.next = node3;
node3.next = null;

node4.next = node5;
node5.next = node6;
node6.next = node7;

console.log(mergeTwoLinkedLists(node1, node4));


