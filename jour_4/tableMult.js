
if (process.argv[2] && process.argv[3] == undefined) {
    tableMult(process.argv[2])
} else {
    console.log('Error');
}

function tableMult(num) {
    var i = 1;
    var result = 1;

    while (i <= 10) {
        result = i * parseInt(num);
        console.log(i + ' * ' + num + ' = ' + result);
        i++;
    }
}






//Archi faux super 
//function tableMult() {
   // const mul = 3

 //   for (var i = 0; i<=10; i++)
    
  //  var table = 1;

   // table[i]=table[i].lenght * mul
    


//}
//console.log (tableMult[8]);