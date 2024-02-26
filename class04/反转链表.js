// 反转链表
// 1 -> 2 -> 3 -> 4 -> 5 -> null
// 5 -> 4 -> 3 -> 2 -> 1 -> null

// 思路
// 反转的方式是将后面节点的 next 指向前面的节点
// 我们定义两个指针 p1 和 p2
// 由于第一个节点在反转后将会变成最后一个节点，并且 next 需要指向 null
// 所以我们将 p1 设置为 head，p2 设置为 null
// 我们需要提前存储下 p1 的下一个节点
// while 循环
// 最后返回 p2 是因为 循环到最后 p2 会指向头节点 p1 会指向 null


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


const a = { val: "a" };
const b = { val: "b" };
const c = { val: "c" };
const d = { val: "d" };

a.next = b;
b.next = c;
c.next = d;

const reserve = reverseList(a);

console.log(reserve);
