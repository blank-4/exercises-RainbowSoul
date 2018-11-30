function exercice1() {
    var inventaire = ["salade", "tomate", "oignons"];
    inventaire.push("sauce algérienne"); // Ajout d'un quatrième élément au tableau, augmentant ainsi la taille de l'inventaire de 1.
    inventaire.pop(inventaire.lastIndexOf); // Retrait du dernier élément du tableau, réduisant ainsi la taille de l'inventaire de 1.
    console.log(inventaire[0]); // Premier élément du tableau.
    console.log("----------"); // Séparation.
    arrayFunct(inventaire); // Appel de la fonction arrayFunct qui va afficher le contenu du tableau de manière itérative.
    console.log("----------"); // Séparation.
    return inventaire.length; // Taille de l'inventaire.
}
console.log(exercice1());

var a = []; // Déclaration d'une variable de type Array qui n'a pas de contenu.
function arrayFunct(a) {
    for (var i = 0; i < a.length; i++) { // On compte chaque élément du tableau.
        console.log(a[i]); // On affiche chaque élément du tableau en chaîne de caractères.
    }
    return a;
}