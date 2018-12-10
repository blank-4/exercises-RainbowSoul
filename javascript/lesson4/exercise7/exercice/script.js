function nombreDeJour(month, year) {
   console.log(anneeBissextile(year));
   return new Date(year, month, 0).getDate();
}
function anneeBissextile(year) {
   if (year % 4 == 0 && year % 100 != 0) {
      return true;
   } else {
      return false;
   }
}
console.log(nombreDeJour(2, 2018));