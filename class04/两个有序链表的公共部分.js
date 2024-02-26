// 两个有序链表的公共部分
function ListNode(val) {
  this.val = val;
  this.next = null;
}


function samePartList(headA, headB) {
  let firstSameA = null;
  let firstSameB = null;


  // 这部分利用了 两个链表有序的特点 找到 val 相同的节点
  while (headA && headB) {
    if (headA.val < headB.val) {
      headA = headA.next;
    } else if (headA.val > headB.val) {
      headB = headB.next;
    } else {
      firstSameA = headA;
      firstSameB = headB;
      break;
    }
  }

  if (!firstSameA || !firstSameB) {
    return null;
  }

  let headC = new ListNode(0);
  let p = headC
  
  while (firstSameA && firstSameB) {
    if (firstSameA.val === firstSameB.val) {
      p.next = new ListNode(firstSameA.val);
      p = p.next;
    } else {
      return headC.next;
    }

    firstSameA = firstSameA.next;
    firstSameB = firstSameB.next;
  }

  return headC.next;
}


const a1 = { val: "0" }
const a2 = { val: "3" };
const a3 = { val: "5" };
const a4 = { val: "6" };
a1.next = a2;
a2.next = a3;
a3.next = a4;

const b1 = { val: "1" };
const b2 = { val: "2" };
const b3 = { val: "3" };
const b4 = { val: "5" };
const b5 = { val: "6" };
b1.next = b2;
b2.next = b3;
b3.next = b4;
b4.next = b5;


let t = samePartList(a1, b1);
console.log(t)
console.log('123');