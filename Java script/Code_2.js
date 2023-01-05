function drawTriangle(hight,symbol){
    for(i=0;i<hight;i++){
        let branch = ' '
        for(j=0;j<=i;j++){
            branch += symbol    
        }
        console.log(branch)
    }
    return 0;
}

console.log(drawTriangle(5, '*'))