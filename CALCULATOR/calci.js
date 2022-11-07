// const display1 =document.querySelector('.display');
// const numbersElements =document.querySelectorAll('.number');
// const operationElements =document.querySelectorAll('.operation');
// const clearElement =document.querySelector('.all-clear');
// const dotElement =document.querySelector('.dot');
// const equalElement =document.querySelector('.equal');


// let dis1Num= "";
// let 



function view(num){
    document.getElementById("result").button+=num;
}
function compute(){
    var x=document.getElementById("result").button;
    var y=eval(x);
    document.getElementById("result").button=y;
}
function clr()
{
    document.getElementById("result").button="";
}
       
        