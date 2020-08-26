//renvoi une chaine de caractère ou chaque lettre de l'initiale
//sera remplacée par la 13eme  lettre de l'alphabet qui vient après celle de l'initiale

var index = 13;
var num1 = 65;
var num2 = 90;

function rot13(str) {

    for (var i = 0; i < str.length; i++) {
        console.log(str[i])

        if (str[i].charCodeAt() <= 78) {
            var result;
            str[i].toLowerCase(String.fromCharCode(str[i].charCodeAt(i)));
            result = result+ 13;
            return result;
        

        } else if (str[i].charCodeAt() <= 90) {
            str[i].toLowerCase(String.fromCharCode(str[i].charCodeAt(i)));
            result[i].toLowerCase() = result[i].toLowerCase() + 26 - 13;
        }

    }
    return 'retour de test'
}

console.log(rot13(75));



