'use strict'

'use strict'
var num = 4


function firstFactoriel(num) {
    var result = 0;
    
    for (var i= 0; i<= num; i++) {
        
        result = result*i
        
    }
    return result

   

}

console.log(firstFactoriel(num))