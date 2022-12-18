const drawTriangle = (n, star) => {
    let result = "";
    for(let i=1; i<=n; i++){
        result = result + star;
        console.log(result);
    }
}
drawTriangle(5,"*");