/*var prompt = require('prompt');

/*prompt.start();

function displayPrompt() {
  prompt.get({ name: 'q', description: 'Do you like prompt?' }, function (
    err,
    result
  ) {
    if (result.q === 'y' || result.q === 'n') {
      console.log('Answer received');
    } else {
      displayPrompt();
    }
  });
}

displayPrompt();*/

/*var displayPrompt = require('prompt');
var a = Math.round(Math.random() * 100);


/*function displayPromt(min, max)
var saisie = parseInt(displayPrompt("Quel est le nombre"));
while (saisie != a) {
  if (saisie > a) {
    console.log("c'est moins")
  }
  if (saisie < a) {
    console.log("c'est plus")
  }
  var saisie = parseInt(displayPrompt("Quel est le nombre"));

  if (saisie === a) {
    console.log("Bravo, vous avez trouvez le nombre mystère !!!")
  }
}*/

var prompt = require ('prompt');
var min = 0;
var max = 100;
var a = Math.round(Math.random() * (max - min + 1));
console.log(a);

var saisie = parceInt(displayPrompt("Quel est le nombre"));


prompt.start();

function displayPrompt() {
  
 

  if (saisie > a) {
    console.log('c\'est moins !');
  }
  if (saisie < a) {
    console.log('c\'est plus !');

 prompt.get(Math.round(Math.random()) * (max - min + 1));

  } else if (saisie === a) {
    console.log('Bravo, vous avez trouvez le nombre mystère !!!');
    }
    
  
}