function nombreDeJour(month, year) {
   // On indique que la valeur Days = 0 pour que la fonction puisse nous retourner le dernier jour du mois de l'année entrée.
   // Donc si je met 2, 2018, il m'affiche le dernier jour du mois de Février 2018. Donc 28, il y a 28 jours.
   console.log(anneeBissextile(year));
   return new Date(year, month, 0).getDate();
}
function anneeBissextile(year) {
   if (year % 4 == 0) {
      return true;
   } else {
      return false;
   }
}
console.log(nombreDeJour(2, 2018));