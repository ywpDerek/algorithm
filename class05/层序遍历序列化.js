// 层序遍历 序列化
const bt = require("./bt");

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function parseToStr(head) {
  if (!head) return "";
  const queue = [];
  queue.push(head);
  let str = "";

  while (queue.length) {
    const cur = queue.shift();
    if (cur) {
      str += cur.val + "_";
      queue.push(cur.left);
      queue.push(cur.right);
    } else {
      str += "#_";
    }
  }
  return str;
}

const str = parseToStr(bt);
console.log(str);

function parseToTree(data) {
  if (!data) return null;
  const arr = data.replace(/_$/, "").split("_");
  const queue = [];
  let i = 1;
  const head = new Node(arr[0]);

  queue.push(head);

  while (queue.length) {
    const cur = queue.shift();

    // cur.left = new Node(arr[i++]);
    if (arr[i] !== "#") {
      cur.left = new Node(arr[i++]);
      queue.push(cur.left);
    } else {
      cur.left = null;
      i++;
    }

    if (arr[i] !== "#") {
      cur.right = new Node(arr[i++]);
      queue.push(cur.right);
    } else {
      cur.right = null;
      i++;
    }
  }

  return head;
}

console.log(parseToTree(str));
