function sumArray(table) {
   table = ['1', '2', '3', '4', '5'];
   var sum = 0;
   for (var i = 0; i < table.length; i++) {
      sum = (sum + 1) + i;
   }
   return sum;
}
console.log(sumArray());