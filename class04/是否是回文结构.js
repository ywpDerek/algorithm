// 是否是回文结构


var isPalindrome = function (head) {
  let fast = head;
  let slow = head;
  let isEvenNumber = false;

  while (fast.next) {
    if (fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    } else {
      fast = fast.next;
      isEvenNumber = true;
    }
  }

  if (isEvenNumber) {
    reverseList(slow.next);
    slow.next = null;
  } else {
    reverseList(slow);
    slow.next = null;
  }

  let left = head;
  let right = fast;

  while (right || left) {
    if (left.val === right.val) {
      left = left.next;
      right = right.next;
    } else {
      return false;
    }
  }

  return true;
};

function reverseList(head) {
  let p1 = head;
  let p2 = null;

  while (p1) {
    let temp = p1.next;
    p1.next = p2;
    p2 = p1;
    p1 = temp;
  }
  return p2;
}

const a = { val: '1' };
const b = { val: '2' };
a.next = b;

console.log(isPalindrome(a))

