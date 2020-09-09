var prompt = require ('prompt');
var min = 0;
var max = 100;
var result = result=(max-min)*100;
var obj= {
  'Quel est le nombre mystère':0
}

var a = Math.round(Math.random() * (max - min + 1));
console.log(a);

prompt.start();

function displayPrompt() {
    prompt.get( ['Quel est le nombre mystère ? '], 
    function (err, result)
    
     { if (result != a) {
      console.log('recommencer');
      displayPrompt();
      
    } if (result === obj) {
      console.log('bravo');
     
    }
    });
};
    
  
  displayPrompt();