'use strict'

var first = 25;
var seconde = 30;

function swap(first, second) {
    console.log('print la valeur de first:')
    console.log(first);

    console.log('print la valeur de secondesx:')
    console.log(second)

    var third
    console.log('print la valeur de third:')
    console.log(third)

    third = first
    console.log('print la valeur de first après "first = seconde":')
    console.log(third)

    second = third
    console.log('print la valeur de second après "second = third ":')
    console.log(second)
    
    console.log('result final ":')
    return[first,second];

}
console.log(swap(25, 30))