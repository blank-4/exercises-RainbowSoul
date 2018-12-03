console.log('----- Message Envoyé -----');
function chiffrer(string, caesar) {
   var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
   var letters = string.split('');
   for (var i = 0; i < letters.length; i++) {
      var result = letters[i];
      console.log(result.split(''));
   }
   console.log('----- Message Encodé -----');
   for (var i = 0; i < letters.length; i++) {
      var display = alphabet.indexOf(letters[i]) + caesar;
      display = (display + 26) % 26;
      console.log(alphabet[display].split('').join());
   }
}

chiffrer("je suis vivant", 2);
// lgbuwkubxkxcpv = je suis vivant ( décalage de 2 )
console.log('----- Message Codé Envoyé -----');

function dechiffrer(string, caesar) {
   chiffrer(string, caesar);
}
dechiffrer("lgbuwkubxkxcpv", -2);

// Ceci dit, les espaces sont remplacés par des Z