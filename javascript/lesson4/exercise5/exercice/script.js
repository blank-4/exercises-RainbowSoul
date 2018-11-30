function exercice5() {
   var maString = "Arch Enemy";
   console.log(maString.slice(0, 5)); // Affiche la moitié de la chaîne de charactère ( comprend aussi l'espace entre les deux mots pour une égalité parfaite ).
   console.log(maString.slice(0, 5).split("").reverse().join("")); // Affiche la même moitié de la chaîne de charactère ( comprend aussi l'espace entre les deux mots pour une égalité parfaite ), sauf que l'ordre des lettres est inversé.
}
exercice5();