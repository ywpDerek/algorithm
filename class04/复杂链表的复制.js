// 剑指offer 35.复杂链表的复制

function Node(val, next, random) {
  this.val = val;
  this.next = next;
  this.random = random;
};
// 使用哈希表的方式
var copyRandomList = function (head) {
  let p = head;
  const listMap = new Map();

  while (p) {
    let copy = new Node(p.val);
    listMap.set(p, copy);
    p = p.next;
  }

  p = head;
  listMap.set(null, null);
  while (p) {
    // if (p.next) {
    //     listMap.get(p).next = listMap.get(p.next);
    // }
    // if (p.random) {
    //     listMap.get(p).random = listMap.get(p.random);
    // }
    listMap.get(p).next = listMap.get(p.next);
    listMap.get(p).random = listMap.get(p.random);

    p = p.next;
  }

  return listMap.get(head);
};

// 不使用 哈希表的方式
var copyRandomList = function (head) {
  if (!head) {
    return;
  }

  let p = head;
  let copy = null;
  let next = null;

  while (p) {
    next = p.next;
    p.next = new Node(p.val);
    p.next.next = next;
    p = next;
  }

  p = head;
  while (p) {
    next = p.next.next;
    copy = p.next;
    copy.random = p.random ? p.random.next : null;
    p = next;
  }

  p = head;
  let res = head.next;

  while (p) {
    next = p.next.next;
    copy = p.next;
    p.next = copy.next;
    copy.next = p.next ? next.next : null;
    p = next;
  }

  return res;
};

const a = null
const listMap = new Map();
listMap.set(a, null);
console.log(listMap.get(a))
console.log(listMap.get(undefined));