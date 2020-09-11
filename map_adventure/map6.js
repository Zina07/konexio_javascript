

var arr = [{ firstName : 'Daniel', surname : 'Beckham'}, 
            {firstName : 'David', surname : 'Craig'}];

var arr2 = arr.map(MyNameList);

    function MyNameList(list) {
        return list.firstName + list.surname ;

    }

       console.log(arr2);