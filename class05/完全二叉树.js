// 判断是否是完全二叉树

function isCBT(root) {
  if (!root) return false;

  const queue = [];
  queue.unshift(root);
  let isMeet = false;

  while (queue.length) {
    const item = queue.pop();
    const l = item.left;
    const r = item.right;

    if (
      (isMeet && (!l || !r)) ||
      (!l && r)
    ) {
      return false;
    }

    if (l) {
      queue.unshift(l);
    }
    if (r) {
      queue.unshift(r);
    }

    if (!l || !r) {
      isMeet = true;
    }
  }

  return true;
}