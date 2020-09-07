var nb1 = parseInt(process.argv[2])
var nb2 = parseInt(process.argv[4])
var op = process.argv[3]

if (process.argv.length !== 5) {
    console.log('error')
    return;
}

var opObj = {
    '+': function(chiffre1, chiffre2) {
        return chiffre1 + chiffre2
    },
    '-': function(chiffre1, chiffre2) {
        return chiffre1 - chiffre2
    },
    '/': function(chiffre1, chiffre2) {
        return chiffre1 / chiffre2
    },
    '%': function(chiffre1, chiffre2) {
        return chiffre1 % chiffre2
    },
    '*': function(chiffre1, chiffre2) {
        return chiffre1 * chiffre2
    }
}

console.log(opObj[op](nb1, nb2))

//Solution 2
var nb1 = parseInt(process.argv[2])
var nb2 = parseInt(process.argv[4])
var op = process.argv[3]

var result;

switch (op) {
    case '+':
        result = nb1 + nb2;
        break;
    case '-':
        result = nb1 - nb2;
        break;
    case '/':
        result = nb1 / nb2;
        break;
    case '*':
        result = nb1 * nb2;
        break;
    case '%':
        result = nb1 % nb2;
        break;
    default:
        console.log('aucune operations trouvé')
}

console.log(result)

// solution 3
var nb1 = parseInt(process.argv[2])
var nb2 = parseInt(process.argv[4])
var op = process.argv[3]

var result;

if (op === '+') {
    result = nb1 + nb2;
} else if (op === '-') {
    result = nb1 - nb2;
} else if (op === '*') {
    result = nb1 * nb2;
} else if (op === '/') {
    result = nb1 / nb2;
} else if (op === '%') {
    result = nb1 % nb2;
} else {
    console.log('aucune operations trouvé')
}

console.log(result)