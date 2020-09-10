
var arr = ['m', 'n', 'o', 'p'];
var arr2 = arr.map(myMaj);

function myMaj(alpha) {
    return alpha.toUpperCase();
}



console.log(arr2);

// affiche [ 'M', 'N', 'O', 'P' ]