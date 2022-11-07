function view(num){
    document.getElementById("result").innerHTML+=num;
}
function compute(){
    var x=document.getElementById("result").innerText;
    var y=eval(x);
    document.getElementById("result").innerHTML=y;
}
function clr()
{
    document.getElementById("result").innerHTML="";
}
       
        