function sumArray(table = ['a', 'b', 'c', 'd', 'e']) {
   var sum = 0;
   for (var i = 0; i < table.length; i++) {
      sum = (sum + 1) + i;
   }
   return sum;
}
console.log(sumArray());