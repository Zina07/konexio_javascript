
//Correction

    function isPalindrome(str) {
        // The charecters that I'll remove from the string
        var specialChars = ' 0123456789,.;:-_';
        // Initialize
        var strInverse = '';
        var strNoSpecialChars = '';
    
        // Loops each letter of the string
        for (var i = 0; i < str.length; i++) {
    
            // Checks if the actual char is one of my special chars that I want to skip
            if (specialChars.search(str[i]) === -1) {
    
                // If it's not, then we add the char to my new clean str
                strNoSpecialChars += str[i];
                // And also in the inverse way
                strInverse = str[i] + strInverse;
    
            }
        }
    
        // Returns if the str with no special chars is written the same in both ways
        return strNoSpecialChars == strInverse;
    }
    
    // Test cases
    console.log(isPalindrome('test'))
    console.log(isPalindrome('never odd or even'))
    console.log(isPalindrome('e0ye'))
    console.log(isPalindrome('kayak'))
    console.log(isPalindrome('ka...:;ya112k'))
    console.log(isPalindrome('a.a a'))