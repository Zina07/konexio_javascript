

var myString = 'hello my word';

function worldCount(str) {
    
    var arr = str.split(' ');
    var myLength = arr.length;
    return myLength;
}
console.log(worldCount(myString));