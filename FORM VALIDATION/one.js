function myForm(){

    let one=document.getElementById("userText").value;
    if (one==""){
        document.getElementById("userName").innerHTML="Please Enter Your Name"
    }
    
    let two=document.getElementById("pass").value;
    let three=document.getElementById("repass").value;
    if(two !== three){
        document.getElementById("userPassword").innerHTML= "Please enter correct password"
    }
    return false
}