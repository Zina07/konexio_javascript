var prompt = require('prompt');
var min = 1;
var max = 100;
//var result = result = (max - min) * 100;



var a = Math.round(Math.random() * (max - min + 1));
console.log(a);

prompt.start();

function displayPrompt() {
  prompt.get({ name: 'inputUser', description:'Quel est le nombre mystère ? '},
    function (err, result) {
      var saisie = parseInt(result.inputUser)
      //console.log(saisie)
      //console.log(typeof saisie)

       if (saisie != a) { 
         console.log('recommencer');
         displayPrompt();
         
        } else if (saisie === a) {
         console.log('bravo');
         return

       }
    });
};


displayPrompt();