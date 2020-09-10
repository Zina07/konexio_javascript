
var constN = 10;

function getCalculation(num) {
    var result = constN + num;
    return result

}

var result = getCalculation(12)
var result2 = getCalculation(7)
var result3 = getCalculation(147)
var result4 = getCalculation(-14)

var resultN = process.argv.slice(2);
console.log('expr : ', result2);
console.log('expr : ', result)
console.log('expr : ', result3);
console.log('expr : ', result4)


