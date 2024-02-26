// 先序遍历
const bt = require('./bt')

// 递归版本
const preOrder = (root) => {
  if (!root) return;

  console.log(root.val);
  preOrder(root.left);
  preOrder(root.right);
}

// 非递归方法
const preOrderUnRecur = (root) => {
  if (!root) return;
  const arr = [];
  arr.push(root);

  while (arr.length) {
    const head = arr.pop();
    console.log(head.val);

    if (head.right) {
      arr.push(head.right)
    }
    if (head.left) {
      arr.push(head.left)
    }
  }
}

preOrderUnRecur(bt);