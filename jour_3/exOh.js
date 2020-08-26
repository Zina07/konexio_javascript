
// exhOh(str) prend en compte (str)
//retourne true si même nbr egal de X et de O
//sinon retourne false
// donc c'est un boleen
//d'abord instaurer un boucle pour la lecture de toute la string
//compter le nbr de X et compter le nbr de O
//si dans la longueur de string il y a le même nbr de "X" et de "O" 
//alors retourne 'true' 
//sinon retourne 'false'


function exhOh(str) {
    var counterX = '';
    var counterO = '';

    for (var i = 0; i < str.lenght; i++) {
        if (str[i].toUppercase() === 'X') {
            counterX = counterX + 1;
        }
    
        if (str[i].toUppercase() === 'O') {
            counterO = counterO + 1;
        }  
    }

    if (counterO === counterX) {
        return true;
    
    } 

}


console.log(exhOh('KONEXIO'));
