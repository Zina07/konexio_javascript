function letterCount(str, search) {
    var count = 0;

    for (var i = 0; i < str.length; i++) {
        if (str[i] === search) {
            count++;
        }
    }

    return count;
}

console.log(letterCount("Hello apple pie", "o"));
console.log(letterCount("Hello apple pie", "p"));