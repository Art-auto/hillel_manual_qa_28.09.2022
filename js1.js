const ділення = (a, b) =>{
    let result = a/b;
    let remainder = a%b;
    if(a%b===0){
        console.log ("Ділиться"+ ". "+ result);
    } else if(a%b!==0){
        console.log ("Ділиться з залишком"+". " + remainder);
    }
    }
    ділення(12,6);
    ділення(12,3);
    ділення(12,5);