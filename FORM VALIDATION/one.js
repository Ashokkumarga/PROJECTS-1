function myForm(){

    let one=document.getElementById("userText").value;
    if (one==""){
        document.getElementById("userName").innerHTML="Please Enter Your Name"
    }
    return false;
}