
var arr = ['apple', 'croissant', 'pear']


text = "<li>";
var arr2 = arr.map(myFruitList);
text1 = "</li>";

function myFruitList(value) {
  return value = text + value + '</li>'
  //correction - return '<li>' + value + '</li>'
 
}

console.log(arr2)

//Affiche
//[ '<li>apple</li>', '<li>croissant</li>', '<li>pear</li>' ]