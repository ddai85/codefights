// Definition for singly-linked list:
function ListNode(x) {
  this.value = x;
  this.next = null;
}
//
function rearrangeLastN(l, n) {
  if (n === 0) {
    return l;
  }
  let currentNode = l;
  let count = 1;
  let beforeHead = null;
  let head = l;

  while (currentNode.next !== null) {
    if (count >= n) {
      if (beforeHead === null) {
        beforeHead = l;
        head = l.next;
      } else {
        beforeHead = beforeHead.next;
        head = head.next;
      }
    }
    currentNode = currentNode.next;
    count++;
  }

  if (beforeHead === null) {
    return l;
  }
  beforeHead.next = null;
  currentNode.next = l;


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

console.log(JSON.stringify(rearrangeLastN(node1, 6)));