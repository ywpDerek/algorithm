class Stack {
  constructor() {
    this.list = [];
  }

  add(item) {
    this.list.push(item);
  }

  pop() {
    return this.list.pop();
  }

  size() {
    return this.list.length;
  }
}

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Queue {
  constructor() {
    this.list = [];
  }

  add(item) {
    this.list.push(item);
  }

  pop() {
    return this.list.shift();
  }

  size() {
    return this.list.length;
  }
}

// 先序遍历
function preOrder(root) {
  if (!root) {
    return;
  }

  const stack = new Stack();
  stack.add(root);

  while (stack.size()) {
    const node = stack.pop();

    console.log(node.value);

    if (node.right) {
      stack.add(node.right);
    }

    if (node.left) {
      stack.add(node.left);
    }
  }
}

// 后序遍历
function postOrder(root) {
  if (!root) {
    return;
  }

  const stack = new Stack();
  const arr = [];
  stack.add(root);

  while (stack.size()) {
    const node = stack.pop();

    arr.push(node.value);

    if (node.left) {
      stack.add(node.left);
    }

    if (node.right) {
      stack.add(node.right);
    }
  }

  while (arr.length) {
    console.log(arr.pop());
  }
}

// 中序遍历
function inOrder(root) {
  if (!root) {
    return;
  }
  const stack = new Stack();

  function getLeftTreeNodes(root) {
    while (root) {
      stack.add(root);
      root = root.left;
    }
  }

  getLeftTreeNodes(root);

  while (stack.size()) {
    const node = stack.pop();
    console.log(node.value);

    if (node.right) {
      getLeftTreeNodes(node.right);
    }
  }
}

// 宽度有限遍历
function widthFirst(root) {
  if (!root) {
    return;
  }

  const queue = new Queue();
  queue.add(root);

  while (queue.size()) {
    const node = queue.pop();

    console.log(node.value);

    if (node.left) {
      queue.add(node.left);
    }

    if (node.right) {
      queue.add(node.right);
    }
  }
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);

root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

// preOrder(root);
// postOrder(root);
// inOrder(root);
widthFirst(root);
