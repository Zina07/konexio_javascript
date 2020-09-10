
var expression = 'hello'

function getHello (str) {
    var concatenation
    concatenation = expression + ' ' + str
    return concatenation
}

var result = getHello('Konexio')
var result2= getHello('Jean')

var expr = process.argv.slice(2);
console.log('expr : ', result2);
console.log('expr : ', result)
 

/*function doSomething() {
    return 'Yeah !';
}

var result = doSomething();

console.log(result);*/