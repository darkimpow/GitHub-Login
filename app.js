const userElement = document.getElementById("username");
const mainElement = document.getElementById("mainarea");
const passElement = document.getElementById("password");
const alertElement = document.getElementById("alertbox");
const errormsg = ["Make sure to enter your password!","You must enter your username or email!","looks Great!"];
const submitBtn = document.getElementById("submit-btn");

 mainElement.addEventListener("click",function (event){
    event.preventDefault();
    // the "!" will make the blank field a truthy or false field if there is no content entered//
     if(!userElement.value){
         alertElement.innerHTML = errormsg[1];
         alertElement.style.color = "red";
     } else if (!passElement.value) {
         alertElement.innerHTML = errormsg[0];
         alertElement.style.color = "red";
     } else{
         alertElement.innerHTML = errormsg[2];
         alertElement.style.color = "green";
     }
 });


