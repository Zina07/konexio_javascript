function firstReverse(str) {
    var result = '';

    for (var i = str.length; i >= 0; i--) {
        result += str.charAt(i);
    }

    return result;
}

console.log(firstReverse('Hello World and Coders'));
console.log(firstReverse('konexio'));
console.log(firstReverse('I Love Code'));

