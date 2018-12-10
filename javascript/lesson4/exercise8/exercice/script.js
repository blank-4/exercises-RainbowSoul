function sumArray(table = [1, 10, 9, 20, 14]) {
   var sum = 0;
   for (var i = 0; i < table.length; i++) {
      sum = sum + table[i];
   }
   return sum;
}
console.log(sumArray());