console.log('----- Message Envoyé -----');
function chiffrer(string, caesar) {
   var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
   var letters = string.split('');
   for (var i = 0; i < letters.length; i++) {
      console.log(letters[i].split(''));
   }
   console.log('----- Message Encodé -----');
   for (var i = 0; i < letters.length; i++) {
      var encoded = (alphabet.indexOf(letters[i]) + caesar) % 26;
      console.log(alphabet[encoded].split(''));
   }
}

chiffrer("hello", 2);
// khoor = hello ( décalage de 3 )
// jgnnq = hello ( décalage de 2 )
console.log('----- Message Codé Envoyé -----');

function dechiffrer(string, caesar) {
   chiffrer(string, caesar);
}
dechiffrer("jgnnq", -2);

// Je pense que ce que j'ai fais ici ne sert à rien.