
//function ageCalculator(date)
//return new date.timestamp;


//console.log(ageCalculator(date));

var date = new date('January 31,1980 11:20:00')
function ageCalculator(date) {
        var diff = Date.now() - date.getTime();
        var age = new Date(diff);
        return Math.abs(age.getUTCFullYear() - 1980);
};

console.log(ageCalculator(new Date('1980, 01, 31')));

//Date(année, mois, jour)   


//const date1 = new Date('December 17, 1995 03:24:00');
// Sun Dec 17 1995 03:24:00 GMT...

//const date2 = new Date('1995-12-17T03:24:00');
// Sun Dec 17 1995 03:24:00 GMT...
