// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function isListPalindrome(l) {
  //input is first node of a linked list
  //O(n) time can mean multiple traversals
  //O(1) time means we can't store values along the way or duplicate the list

  //find length of palindrome
  let length = 0;
  let currentNode = l;
  while (currentNode !== null) {
    length++;
    currentNode = currentNode.next;
  }

  let midpoint;
  if (length % 2) {
    midpoint = Math.ceil(length / 2);
  } else {
    midpoint = length / 2;
  }

  let reverseHead = l;
  for (let i = 0; i < midpoint; i++) {
    reverseHead = reverseHead.next;
  }

  let reverseNode = reverseHead.next;
  reverseHead.next = null;
  let lastNode = reverseHead;

  while (reverseNode !== null) {
    let nextNode = reverseNode.next;
    reverseNode.next = lastNode;
    lastNode = reverseNode;
    reverseNode = nextNode;
  }

  let newHead = lastNode;

  while (newHead !== null) {
    if (newHead.value === l.value) {
      newHead = newHead.next;
      l = l.next;
    } else {
      return false;
    }
  }

  return true;

  //output is a boolean
}
  
function ListNode(x) {
  this.value = x;
  this.next = null;
}

let node1 = new ListNode(0);
let node2 = new ListNode(1);
let node3 = new ListNode(1);



node1.next = node2;
node2.next = node3;
node3.next = null;


console.log(isListPalindrome(node1));