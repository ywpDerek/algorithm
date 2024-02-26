function ListNode(val) {
  this.val = val;
  this.next = null;
}


var isPalindrome = function(head) {
  let slow = head;
  let quick = head;

  while (quick.next && quick.next.next) {
    slow = slow.next;
    quick = quick.next.next;
  }

  let right = reverseList(slow);
  let left = head;
  let result = true;
  console.log(left);

  while (left && right) {
    if (left.val === right.val) {
      left = left.next;
      right = right.next;
    } else {
      result = false;
      break;
    }
  }

  return result;
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

const a = new ListNode(1)
const b = new ListNode(2);
const c = new ListNode(2);
const d = new ListNode(1);

a.next = b;
b.next = c;
c.next = d;

console.log(isPalindrome(a));


