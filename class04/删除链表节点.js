// 删除链表节点

// 思路
// 假如链表是 a -> b -> c -> d
// 我们正常情况删除链表的方式是
// 如果我们要删除 b，那么直接 a.next = c;
// 但是现在我们只给到了当前要被删除的节点
// 我们我们可以将当前节点的 val 和 下一个节点的val进行互换，并删除下一个节点。

function deleteNode(node) {
  node.val = node.next.val;
  node.next = node.next.next;
}



const a = { val: 'a' };
const b = { val: 'b' };
const c = { val: 'c' };
const d = { val: 'd' };

a.next = b;
b.next = c;
c.next = d;

deleteNode(b);

console.log(a);
