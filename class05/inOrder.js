// 中序遍历
const bt = require("./bt");

// 递归版本
const inOrder = (root) => {
  if (!root) return;

  inOrder(root.left);
  console.log(root.val);
  inOrder(root.right);
};

// 非递归版本
const inOrderUnRecur = (root) => {
  if (!root) return;

  const stack = [];
  let cur = root;

  while (stack.length || cur) {
    if (cur) {
      stack.push(cur);
      cur = cur.left;
    } else {
      cur = stack.pop();
      console.log(cur.val);
      cur = cur.right;
    }
  }
};

// 自己写的 但是还是上面的方式比较简洁
const main = (root) => {
  if (!root) return;

  const stack = [];

  while (root) {
    stack.push(root);
    root = root.left;
  }

  while (stack.length) {
    let cur = stack.pop();
    console.log(cur.val);

    cur = cur.right;

    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }
  }
};

main(bt);
