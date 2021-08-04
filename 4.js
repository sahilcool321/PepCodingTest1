let arr1 = [
  [1, 2],
  [5, 6],
];
let arr2 = [[3, 4]];

let num = arr1.pop();
arr1.push(...arr2);
arr1.push(num);

console.log(arr1);
