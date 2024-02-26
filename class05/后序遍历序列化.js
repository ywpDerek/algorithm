// 后序遍历的序列化和反序列化
// 需要注意的技巧是
// 后序遍历 是 左右中 翻转一下 就是 中右左
// 我们以这种形式构建反序列化 就可以获取到 root 节点
const bt = require("./bt");

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function parseToStr(head) {
  if (!head) return "#_";
  let str = "";

  str += parseToStr(head.left);
  str += parseToStr(head.right);
  str += head.val + "_";

  return str;
}

const str = parseToStr(bt).replace(/_$/, "");
console.log(str);

const arr = str.split("_");

function parseToTree(arr) {
  let cur = arr.pop();
  if (cur === "#") return null;

  cur = new Node(cur);
  cur.right = parseToTree(arr);
  cur.left = parseToTree(arr);

  return cur;
}

const tree = parseToTree(arr);
console.log(tree);
