function chiffrer(string, key) {
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var result = "";
    string = string.toLowerCase();
    for (var i = 0; i < string.length; i++) {
        // Récupération de l'index de la lettre.
        var letter = string[i];
        var index = alphabet.indexOf(letter);
        // Si l'index est supérieur à -1.
        if (index > -1) {
            // Décalage de l'index en fonction de " key " pour avoir une nouvelle lettre.
            index = (index + key + alphabet.length) % alphabet.length;
            // Trouver la lettre qui est située au nouvel index.
            var nouvelleLettre = alphabet[index]; 
            // Ajout de la nouvelle lettre à la fin du résultat.
            result = result + nouvelleLettre;
        } else {
            result = result + letter;
        }
    }
    return result;
}
function dechiffrer(string, key) {
    return chiffrer(string, -key);
}
console.log(chiffrer("Bienvenue, éè 12?!@", -5));
console.log(dechiffrer("wdziqzipz, éè 12?!@", -5));