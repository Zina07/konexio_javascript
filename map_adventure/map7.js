var arr = [{ firstName : 'Daniel', surname : 'Beckham'}, 
            {firstName : 'David', surname : 'Craig'}];
         

var arr2 = arr.map(MyobjList);

    function MyobjList(list) {
       
        return  {'fulname' : list.firstName + ' ' + list.surname };
        

    }
       console.log(arr2);