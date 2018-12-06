document.getElementById("texte").innerHTML = "Lorem ipsum dolor sit amet";

// Affiche le paragraphe.
function display() {
    document.getElementById("texte").style.display = "flex";
}
// Cache le paragraphe.
function hide() {
    document.getElementById("texte").style.display = "none";
}
// Permet de changer la couleur du texte dans l'HTML.
function colorSwitch() {
    return document.getElementById("texte").style.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
}
// Affiche Lorem ipsum dans la console avec une couleur différente à chaque fois que la fonction est appelée.
function consoleColor() {
    var color = "color: " + '#' + Math.floor(Math.random() * 16777215).toString(16);
    console.log("%cLorem ipsum dolor sit amet", color);
}