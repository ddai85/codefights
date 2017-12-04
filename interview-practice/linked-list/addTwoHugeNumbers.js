// Definition for singly-linked list:
function ListNode(x) {
  this.value = x;
  this.next = null;
}
//
function addTwoHugeNumbers(a, b) {
  let arrA = [];
  let arrB = [];

  let aNode = a;
  while (aNode !== null) {
    arrA.push(aNode.value);
    aNode = aNode.next;
  }

  let bNode = b;
  while (bNode !== null) {
    arrB.push(bNode.value);
    bNode = bNode.next;
  }

  let prevNode = null;
  let carryOver = 0;
  while (arrA.length > 0 || arrB.length > 0) {
    let sum = carryOver;
    if (arrA.length > 0) {
      sum += arrA.pop();
    }
    if (arrB.length > 0) {
      sum += arrB.pop();
    }
    carryOver = 0;
    if (sum > 9999) {
      carryOver = 1;
      sum = sum - 10000;
    }
    let newList = new ListNode(sum);
    newList.next = prevNode;
    prevNode = newList;
  }

  if (carryOver) {
    let carryOverNode = new ListNode(carryOver);
    carryOverNode.next = prevNode;
    prevNode = carryOverNode;
  }
  
  return prevNode;
}

let node1 = new ListNode(1000);
let node2 = new ListNode(2000);
let node3 = new ListNode(7000);
node1.next = node2;
node2.next = node3;

let node4 = new ListNode(3400);
let node5 = new ListNode(5500);
let node6 = new ListNode(7000);
let node7 = new ListNode (1001);
node4.next = node5;
node5.next = node6;
node6.next = node7;

console.log(addTwoHugeNumbers(node1, node4));