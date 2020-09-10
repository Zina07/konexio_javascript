
var arr = ['pan', 'top', 'pal', 'tool'];
var arr2 = arr.map(MyEnver);

function MyEnver(str){
 for (var i = 0; i<= str.length; i++) {
     return str.split('').reverse().join('');
    }
}
console.log(arr2);




