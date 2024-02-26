// 字符串排序
// 编写一个程序，将输入字符串中的字符按如下规则排序。
// 规则 1 ：英文字母从 A 到 Z 排列，不区分大小写。
// 如，输入： Type 输出： epTy

// 规则 2 ：同一个英文字母的大小写同时存在时，按照输入顺序排列。
// 如，输入： BabA 输出： aABb

// 规则 3 ：非英文字母的其它字符保持原来的位置。
// 如，输入： By?e 输出： Be?y

// 注意有多组测试数据，即输入有多行，每一行单独处理（换行符隔开的表示不同行）
// 数据范围：输入的字符串长度满足 1 <= n <= 1000

function main(line) {
  const arr = line.split('\n');
  const newArr = arr.map((item) => takeStr(item));
  return newArr.join("\n");
}

function takeStr(str) {
  const arr = str.match(/[a-zA-Z]/g);
  arr.sort((a, b) => {
    return a.toLowerCase().charCodeAt(0) - b.toLowerCase().charCodeAt(0);
  })

  const arrAll = str.split('');

  let count = -1;
  const result = arrAll.map((item) => {
    if (/[a-zA-Z]/g.test(item)) {
      count++;
      return arr[count];
    } else {
      return item;
    }
  })

  return result.join('')
}


console.log(main(`Bab?A
Type`));