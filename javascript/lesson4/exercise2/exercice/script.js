function exercice2() {
    var exemple = {firstname : "Amine",lastname : "Ahona"};
    exemple.firstname = "Chris"; // On remplace la valeur initiale de "firstname" par celle d'un voisin.
    console.log(exemple.firstname, exemple.lastname); // On affiche la valeur de la propriété "firstname" puis celle de "lastname" dans la variable exemple.
    console.log(exemple); // On affiche l'objet.
    objParam(exemple); // On appelle la fonction objParam qui va afficher de manière itérative le nom des propriétés et leur valeur.
}
exercice2();

var obj = {e1:"hello", e2:"bye", e3:"lel"};
function objParam(object) {
    for (var property in object) {
        console.log(`${property} : ${object[property]}`); // On affiche la propriété puis sa valeur suivant ce format. Ex : Dans "obj", on affiche les propriétés de l'objet, puis les valeurs des propriétés comprises dans l'objet.
    }
    return;
}
objParam();