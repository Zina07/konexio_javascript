var arr = [{ firstName: 'Daniel', surname: 'Beckham' },
{ firstName: 'David', surname: 'Craig' }];


var arr2 = arr.map(MyobjList);
var lista = 'Firstname';
var listb = 'Surname';
var listc = 'Fullname';

function MyobjList(list) {
return {
    'Firstname': list.firstName,
    'Surname': list.surname,
    'Fullname': list.firstName + ' ' + list.surname,
}
}
console.log(arr2);
