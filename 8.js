// numbers in strings
function getContains(val) {
  let arr = val.trim().split("");
  let ret = false;
  arr.forEach((data) => {
    if (!isNaN(data)) {
      ret = true;
    }
  });
  return ret;
}
function numInStr(arr) {
  let ans = [];
  arr.forEach((val) => {
    if (getContains(val)) {
      ans.push(val);
    }
  });
  return ans;
}
console.log(numInStr(["1a", "a", "2b", "b"]));
