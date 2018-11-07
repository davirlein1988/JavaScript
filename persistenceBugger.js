function persistence(num) {
  let arr = num.toString().split("");
  let count = 0;
  let result;
  while (arr.length > 1) {
    result = arr.reduce(function(a, b) {
      return a * b;
    });
    count++;
    arr = result.toString().split("");
  }
  return count;
}
