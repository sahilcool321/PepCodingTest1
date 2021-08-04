let arr1 = ["Jane", "is", "pretty", "ugly"];
let arr2 = ["Jane", "is", "pretty"];

arr1.sort();
arr2.sort();

let i = 0;
while (arr1[i] == arr2[i]) {
  i++;
}

console.log(arr1[i]);
