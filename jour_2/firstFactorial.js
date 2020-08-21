'use strict'



function firstFactoriel(num) {
    var result = 1;
    
    for (var i= 1; i<= num; i++) {
        
        result *= i;
        
    }
    return result;

   

}

console.log(firstFactoriel(4))
//console.log(firstFactoriel(8))