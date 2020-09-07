
function alphabetSoup(str) {
    var arr = str.split("");

    for (var i = 0; i <= arr.length; i++) {

        for (var j = 0; j < arr.length - i; j++) {

            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];

                arr[j] = arr[j + 1];
                
                arr[j + 1] = temp;
            }
        }
    }
    return arr.join('');
}

console.log(alphabetSoup("hello"));
console.log(alphabetSoup("heyllo"));
console.log(alphabetSoup("konexio"));
console.log(alphabetSoup("hooplah"));






//var name = 'konexio'

    

   /*function alphabetSoup(str){
    var tableauStr = str.split("");

   
    for(var i = 0; i<=tableauStr.length; i++ ){   


        if(str[i] > str[i+1]){    
            var swap = str[i];
            str[i] = str[i+1];
            str[i+1] = swap;

        }
    }
    return ;
}
//console.log(alphabetSoup("hello"));



