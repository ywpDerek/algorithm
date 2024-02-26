// 折纸问题

// down: true 凹
// down: false  凸
let i = 1;

function printProcess(i, N, down) {
  if (i > N) return;

  printProcess(i + 1, N, true);
  console.log(`${down ? "凹" : "凸"}`);
  printProcess(i + 1, N, false);
}

printProcess(i, 3, true);
