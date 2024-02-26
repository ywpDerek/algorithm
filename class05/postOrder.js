// 后序遍历
const bt = require("./bt");

// 递归版本
const postOrder = (root) => {
  if (!root) return;

  postOrder(root.left);
  postOrder(root.right);
  console.log(root.val);
};

// 非递归版本
const postOrderUnRecur = (root) => {
  if (!root) return;

  const arr = [];
  const list = [];
  arr.push(root);

  while (arr.length) {
    const head = arr.pop();
    list.push(head);

    if (head.left) {
      arr.push(head.left);
    }
    if (head.right) {
      arr.push(head.right);
    }
  }

  while (list.length) {
    console.log(list.pop().val);
  }
}

postOrder(bt);
