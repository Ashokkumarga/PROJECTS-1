function myForm(){
    let one=document.getElementById("userName").value;
   if(one ==""){
    document.getElementById("name").innerHTML="Please enter the user name"
   }
   return false;
}
