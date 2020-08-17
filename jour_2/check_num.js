            'use strict'
var num1 = 1;
var num2 = 122;

    function  chekNums(num1, num2) {

        if (num1 > num2) {
            return ('num1 is greater than num2');
        }
        else if (num1 < num2) {
            return ('num1 is lower than num2');
        } 
       
        else { 
            return ('num1 is equal to num2');
        }
    }   
    var resultat= chekNums()     
    
    console.log(chekNums(2, 2));
 