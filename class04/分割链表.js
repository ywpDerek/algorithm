// 给你一个链表的头节点 head 和一个特定值 x ，请你对链表进行分隔，
// 使得所有 小于 x 的节点都出现在 大于或等于 x 的节点之前。

// 你不需要 保留 每个分区中各节点的初始相对位置。


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
    } else {
      if (!bigHead) {
          bigHead = head;
          bigEnd = head;
      } else {
          bigEnd.next = head;
          bigEnd = head;
      }
    }

    head = next;
  }

  head = null;

  if (smallHead) {
    head = smallHead;
  }

  if (bigHead) {
    if (head) {
        smallEnd.next = bigHead;
    } else {
        head = bigHead;
    }
  }
  return head;
};