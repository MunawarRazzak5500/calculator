function getNumber(num){
    var R = document.getElementById("R")
    R.value += num
}


function clearResult(){
var R = document.getElementById("R")
R.value = ""
}
function  getResult(){
var R = document.getElementById("R")
R.value = eval(R.value)
}

