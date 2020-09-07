
function vowelCount(str) {
    // variable pour les voyelles de l'alphabet
    var vowels = 'aeiouy';
    // Je dois parcourir la string str

    // Pour chaque boucle je dois verifier pour chaque char si mon char est egal a une voyelle
    //       Si mon char est egal, j'incremente un compteur
    //       Sinon je fais rien
    // return mon compteur
    var count = 0
    for (var i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count = count + 1
        }
    }
    return count
}

// afficher le resultat
console.log(vowelCount('aeiouy'))

/*var vowelCount = function(str){ 
    var count = 0; 
    for(var i = 0; i < str.length; i++){ 
    if(str[i].toLowerCase() == 'a' || str[i].toLowerCase() == 'i' || 
    str[i].toLowerCase() == 'o' ||str[i].toLowerCase() == 'e' ||str[i].toLowerCase() == 'u'){ 
s    } 
    } 
return count; 
} 
console.log(vowelCount('aide')) 
*/