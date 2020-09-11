var arr = [ {firstName : 'Daniel', surname : 'Beckham'}, 
            {firstName : 'David', surname : 'Craig'}];
         

var arr2 = arr.map(MyobjList);

    function MyobjList(list) {
       
        return {
        'Firstname' : list.firstName,
        'Surname' : list.surname,
        'Fulname' : list.firstName + ' ' + list.surname
    
    };
        

    }
       console.log(arr2);