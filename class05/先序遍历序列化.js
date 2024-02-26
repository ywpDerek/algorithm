// 先序遍历的序列化和反序列化

const bt = require("./bt");

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// 序列化
function parseToStr(head) {
  if (!head) {
    return "#_";
  }

  let str = head.val + "_";
  str += parseToStr(head.left);
  str += parseToStr(head.right);

  return str;
}

const btStr = parseToStr(bt);
console.log(btStr);

const arr = btStr.split("_");
// 反序列化
function parseToTree(arr) {
  const cur = arr.shift();
  if (cur === "#") return null;

  const node = new Node(cur);
  node.left = parseToTree(arr);
  node.right = parseToTree(arr);
  return node;
}

const tree = parseToTree(arr);
console.log(tree);
console.log(arr);
