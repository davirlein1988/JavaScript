function persistence(num) {
   //Second solution without reduce method instead a loop for the same purpose
   
   var count = 0;
  var Arr = num.toString().split("");

  while (Arr.length > 1) {
    var result = Arr[0];

    for (var i = 0; i < Arr.length - 1; i++) {
      result = result * Arr[i + 1];
    }
    Arr = result.toString().split("");
    count++;
  }
  return count;
}
