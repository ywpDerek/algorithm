// 在分割链表1的基础上
// 左侧都是 比 x 小的值，中间是等于 x 的值，右侧是大于 x 的值

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  if (!head) {
    return null;
  }

  let smallHead = null;
  let smallEnd = null;

  let eHead = null;
  let eEnd = null;

  let bigHead = null;
  let bigEnd = null;

  while (head) {
    let next = head.next;
    head.next = null;

    if (head.val < x) {
      if (!smallHead) {
        smallHead = head;
        smallEnd = head;
      } else {
        smallEnd.next = head;
        smallEnd = head;
      }
    } else if (head.val > x) {
      if (!bigHead) {
        bigHead = head;
        bigEnd = head;
      } else {
        bigEnd.next = head;
        bigEnd = head;
      }
    } else {
      if (!eHead) {
        eHead = head;
        eEnd = head;
      } else {
        eEnd.next = head;
        eEnd = head;
      }
    }

    head = next;
  }

  if (smallEnd) {
    smallEnd.next = eHead;
    eEnd = eEnd ? eEnd : smallEnd;
  }


  if (eEnd) {
    eEnd.next = bigHead;
  }

  return smallHead ? smallHead : (eHead ? eHead : bigHead);

  // head = null;
  // let headEnd = null

  // if (smallHead) {
  //     head = smallHead;
  //     headEnd = smallEnd;
  // }

  // if (eHead) {
  //     if (head) {
  //         headEnd.next = eHead;
  //         headEnd = eEnd;
  //     } else {
  //         head = eHead;
  //         headEnd = eEnd;
  //     }
  // }

  // if (bigHead) {
  //     if (head) {
  //         headEnd.next = bigHead;
  //         headEnd = bigEnd;
  //     } else {
  //         head = bigHead;
  //         headEnd = bigEnd;
  //     }
  // }
  // return head;
};