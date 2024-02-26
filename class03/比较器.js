
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const s3 = new Student("3", 3);
const s4 = new Student("4", 8);
const s1 = new Student('1', 12);
const s2 = new Student('2', 9);

const arr = [s1, s2, s3, s4];
arr.sort((a, b) => b.age - a.age);
// arr.sort((a, b) => a.age - b.age);

console.log(JSON.stringify(arr))

