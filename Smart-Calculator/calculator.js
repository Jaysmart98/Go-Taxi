function clearScreen() {
    document.getElementById("result").value=  " ";
}

function del() {
    document.getElementById("result").value = result.value.slice (0, -1);
}
 


function display(value) {
   document.getElementById("result").value += value;
}
//This function evaluates the expression and return result
function calculate() {
var p = document.getElementById("result").value;
var q = eval(p);
document.getElementById("result").value = q;
}
function Answer() {
    var p = document.getElementById("result").value;
    document.getElementById("result").value = p;
    }