'use strict'

    var password = '';
    var min = 65;
    var max = 90;

        function passwordGen2 (num) {
           if (num <  6 || num > 15) {
                return 'error';
            }    
            for (var i = 0; i < num; i++) {
            
            var index = Math.floor(Math.random() * (max - min) + min)
            password = password + String.fromCharCode (index);
            }
            return password;
        }

        console.log(passwordGen2(12));