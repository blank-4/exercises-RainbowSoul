function compare(string1, string2) {
    var chain1 = string1.split('');
    var chain2 = string2.split('');
    console.log(chain1);
    console.log(chain2);
    // Si les deux strings sont exactement les mêmes : On affiche qu'elles sont pareilles.
    if (string1 === string2) {
        return "They're same";
    // Si les deux premières lettres des strings ne sont pas identiques : On affiche -1.
    } else if (string1[0] !== string2[0]) {
        return -1;
    // (Bonus) Si les deux strings n'ont pas la même longueur : On affiche qu'elles ne font pas la même longueur.
    } else if (string1.length > string2.length || string1.length < string2.length) {
        return "They're not as long as each other";
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
console.log(compare("lel", "lel"));