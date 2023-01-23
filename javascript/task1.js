const division = (a, b) =>{
    let result = a/b;
    let remainder = a%b;
    if(a%b===0){
        console.log ("Ділиться"+ ". "+ result);
    } else if(a%b!==0){
        console.log ("Ділиться з залишком"+". " + remainder);
    }
    }
 
    division(-15,3);
    division(4,7);