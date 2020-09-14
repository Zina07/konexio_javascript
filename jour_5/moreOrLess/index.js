
var prompt = require('prompt');
var min = 1;
var max = 100;
var a = Math.round(Math.random() * (max - min + 1));
console.log(a);

prompt.start();

function displayPrompt() {
  prompt.get({ name: 'inputUser', description:'Quel est le nombre mystère ? '},
    function (err, result) {
      var saisie = parseInt(result.inputUser)
      console.log(saisie)
      //console.log(typeof saisie)
      
      if (saisie > a) {
        console.log('c\'est moins !');
        displayPrompt;
      }
      if (saisie < a) {
        console.log('c\'est plus !');
        displayPrompt;

      } else if (saisie === a) {
        console.log('Bravo, vous avez trouvez le nombre mystère !!!');
        return;
      };
    }
  )
};

displayPrompt();



//var prompt = require('prompt');
//var min = 1;
//var max = 100;
//var result = result = (max - min) * 100;

// function displayPrompt() {
//   prompt.get({ name: 'inputUser', description:'Quel est le nombre mystère ? '},
//     function (err, result) {
//       var saisie = parseInt(result.inputUser)
//       //console.log(saisie)
//       //console.log(typeof saisie)

//        if (saisie != a) { 
//          console.log('recommencer');
//          displayPrompt();
//         } else if (saisie === a) {
//          console.log('bravo');
//          return

//        }
//     });
// };

// displayPrompt();
// var displayPrompt = require('prompt');
// var a = Math.round(Math.random() * 100);
// function displayPromt(min, max)
// var saisie = parseInt(displayPrompt("Quel est le nombre"));
// while (saisie != a) {
//   if (saisie > a) {
//     console.log("c'est moins")
//   }
//   if (saisie < a) {
//     console.log("c'est plus")
//   }
//   var saisie = parseInt(displayPrompt("Quel est le nombre"));

//   if (saisie === a) {
//     console.log("Bravo, vous avez trouvez le nombre mystère !!!")
//}