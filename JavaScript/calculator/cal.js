// Add function
function addFun() {
    let a = Number(document.getElementById('num_1').value);
    let b = Number(document.getElementById('num_2').value);
    document.getElementById('result').innerHTML=(a+b).toFixed(3);
}
//Subtract function
function subFun() {
    let a = Number(document.getElementById('num_1').value);
    let b = Number(document.getElementById('num_2').value);
    document.getElementById('result').innerHTML=(a-b).toFixed(3);
}
//Multiply function
function mulFun() {
    let a = Number(document.getElementById('num_1').value);
    let b = Number(document.getElementById('num_2').value);
    document.getElementById('result').innerHTML=(a*b).toFixed(3);
}
//Divide function
function divFun() {
    let a = Number(document.getElementById('num_1').value);
    let b = Number(document.getElementById('num_2').value);
    if(b==0){
        document.getElementById('result').innerHTML=("Denominator can not be 0");
    }
    else{
        document.getElementById('result').innerHTML=(a/b).toFixed(3);
    }
}
//Modulus function
function modFun() {
    let a = Number(document.getElementById('num_1').value);
    let b = Number(document.getElementById('num_2').value);
    if(b==0){
        document.getElementById('result').innerHTML=("Denominator can not be 0");
    }
    else{
        document.getElementById('result').innerHTML=(a%b).toFixed(3);
    }
}
// Exponentiation function
function expFun() {
    let a = Number(document.getElementById('num_1').value);
    let b = Number(document.getElementById('num_2').value);
    document.getElementById('result').innerHTML=(a**b).toFixed(3);
}
// Reset function
function resFun() {
    let a = Number(document.getElementById('num_1').value=" ");
    let b = Number(document.getElementById('num_2').value=" ");
    document.getElementById('result').innerHTML=(" ");
}
