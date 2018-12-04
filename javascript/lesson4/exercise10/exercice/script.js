function compare(string1, string2) {
    var string1 = string1.split('');
    var string2 = string2.split('');
    console.log(string1);
    console.log(string2);
    // Si les deux strings sont exactement les mêmes : On affiche qu'elles sont pareilles.
    if (string1 === string2) {
        return "They're same";
    // Si les deux premières lettres des strings ne sont pas identiques : On affiche -1.
    } else if (string1[0] !== string2[0]) {
        return -1;
    // Si les deux strings sont différentes : On affiche à quel moment les strings diffèrent. ( A partir de quelle lettre en gros ).
    } else if (string1 !== string2) {
        for (var i = 0; i < string1.length; i++) {
            if (string1[i] !== string2[i]) {
                return i;
            }
        }
    } else {
    // Si aucune des conditions ci-dessus n'est remplie : On affiche un message d'erreur.
        return "Everyting is going wrong !";
    }
}
console.log(compare("lelel", "lel"));