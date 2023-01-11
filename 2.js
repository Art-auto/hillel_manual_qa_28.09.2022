var x = 5
var y = '*'

var x = triangleFun(x,y) 

function triangleFun(a, b) {
    var star = '';
    for (var i = 0; i < a; i++) {
        star = star + b
        console.log(star)
    }
}