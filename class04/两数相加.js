// 两数相加
// (2 -> 4 -> 3) + (5 -> 6 -> 4)
// 465 + 342
// 807

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function addTwoList(l1, l2) {
  const l3 = new ListNode(0);
  let p1 = l1;
  let p2 = l2;
  let p3 = l3;
  let carry = 0;

  while (p1 || p2) {
    let v1 = p1 ? p1.val : 0;
    let v2 = p2 ? p2.val : 0;

    let total = v1 + v2 + carry;
    carry = Math.floor(total / 10);
    p3.next = new ListNode(total % 10);
    
    if (p1) p1 = p1.next;
    if (p2) p2 = p2.next;
    p3 = p3.next;
  }

  if (carry) p3.next = new ListNode(carry);

  return l3.next;
}