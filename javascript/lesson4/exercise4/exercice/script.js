function exercice4() {
    var monTableau = ["matin", "midi", "soir", "nuit"];
    console.log(monTableau.shift()); // Supprime le premier élément du tableau et le retourne.
    console.log(monTableau.push("j'ai envie de dormir")); // Ajoute un élément au tableau et retourne la longueur du tableau.
    console.log(monTableau.join("-")); // Affiche les éléments du tableau dans une string en séparant les éléments par un "-".
    console.log(monTableau.toString().toUpperCase()); // Affiche les éléments du tableau en majuscule.
}
exercice4();