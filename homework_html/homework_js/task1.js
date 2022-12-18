const getDivision = (a, b) =>{
    let result = a/b;
    let remainder = a%b;
    if(a===0 || b===0){
        console.log ("Неможливо поділити");
    }else if(a%b===0){
        console.log ("Ділиться"+ ", "+ result);
    } else if(a%b!==0){
        console.log ("Не ділиться"+", " + remainder);
    }
    }
    getDivision(10,2);
    getDivision(10,3);
    getDivision(10,0);