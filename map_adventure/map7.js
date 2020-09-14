var arr = [{ firstName : 'Daniel', surname : 'Beckham'}, 
            {firstName : 'David', surname : 'Craig'}];
         

var arr2 = arr.map(MyobjList);
var c = 'fulname'

    function MyobjList(list) {
      
        return  {'Fulname' : list.firstName + ' ' + list.surname };
        

    }
       console.log(arr2);