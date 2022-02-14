
let url ='http://localhost:8080/';
function validateEmail(email){

    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

function validateuname(uname){

    return uname.match(
        /^[A-Za-z\s]+$/    );
}

function validatephone(phone){

    return phone.match(
        /^\d{10}$/    );
}

function validatepassword(upwd){

    return upwd.match(
        /^[a-zA-Z0-9!@#$%^&*]{6,16}$/    );
}

function formValidation(){

    let uname = document.getElementById('uname');
    let email = document.getElementById('email');
    let phone = document.getElementById('phone');
    let upwd = document.getElementById('upwd');
    let cpwd = document.getElementById('cpwd');




   if(uname.value==''){
    document.getElementById('error-username').innerHTML='Enter Username name.';
    return false;
   }else{
    if (validateuname(uname.value)) {
        document.getElementById('error-username').innerHTML='';
       }else{
       document.getElementById('error-username').innerHTML='Username is not valid,Please enter username';
       }   
   }


   if(email.value == ''){
   document.getElementById('error-email').innerHTML = 'Please enter Email.';
   return false;
   }else{
    if (validateEmail(email.value)) {
     document.getElementById('error-email').innerHTML='';
    }else{
    document.getElementById('error-email').innerHTML='Email is not valid,Please enter valid email address';
    }
   }



   if(phone.value==''){
    document.getElementById('error-phone').innerHTML='Enter Phone Number.';
    return false;
   }else{
    if (validatephone(phone.value)) {
        document.getElementById('error-phone').innerHTML='';
       }else{
       document.getElementById('error-phone').innerHTML='Phone Number is not valid,Please enter Correct Phone no';
       }   
   }

   if(upwd.value==''){
    document.getElementById('error-password').innerHTML='Enter Password.';
    return false;
   }else{
    if (validatepassword(upwd.value)) {
        document.getElementById('error-password').innerHTML='';
       }else{
       document.getElementById('error-password').innerHTML='Your password must be at least 6 characters and atmost 16.Your password must contain at least one letter.Your password must contain at least one digit.';
       }   
   }

   if(cpwd.value==''){
    document.getElementById('error-cpassword').innerHTML='Enter Confirm  Password.';
    return false;
   }else{
       if(upwd == cpwd)
       {
        document.getElementById('error-cpassword').innerHTML='';

       }
       else{
        document.getElementById('error-cpassword').innerHTML='Please enter same password.';

       }

   }
   document.getElementById('error-cpassword').innerHTML='';

   let pstData ={
        username:uname.value,
        email:email.value,
        password:cpwd.value,
       phone : phone.value
   }
    $.ajax({
        url: url+"logbook/register",
        type: "post",
        data: pstData,
        success: function(res) {
             let fetch=$.parseJSON(res);
             if(fetch.success=='success'){
                window.location.href=url+"login.html";
             }
        }
    });
    
  console.log(pstData);   
}

function validateclose(){
    window.open('thankyouclose.html')
}
