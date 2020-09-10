
var arr = [1, 2, 3, 4];
var arr2 = arr.map(myTruth);


function myTruth(value) {
    return (value % 2 === 0);
    
}
console.log(arr2);

// affichage [ false, true, false, true ]