function multiples(num, v) {
  let ans = [];

  for (let i = 1; i <= v; i++) {
    ans.push(num * i);
  }
  return ans;
}

console.log(multiples(12, 10));
