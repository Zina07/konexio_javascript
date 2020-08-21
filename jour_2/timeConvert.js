

var numEnSec = 3800;
​
function timeConvert(num) {
    var sec = num % 60;
    var min = Math.floor((num % 3600) / 60);
    var heures = Math.floor(num / 3600);
    return heures + ':' + min + ':' + sec;
}
​
console.log(timeConvert(numEnSec));