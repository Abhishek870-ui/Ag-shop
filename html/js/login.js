


let url = 'http://localhost:8080/';

function validate(){

    let postloginData ={
        username : uname.value,
        password : upwd.value
    }
    $.ajax({
        url : url+"logbook/login",
        type : "post",
        data : postloginData,
        success : function(res){
            if(res.status=='success'){
                window.location.href=url+"thankyoulogin.html";


            }else{
                alert('Invalid username and password.');
            }
        }
    });
    console.log(postloginData);
}














/*
function validateuname(uname){

    return uname.match(
        /^[A-Za-z\s]+$/    );
}
function validatepassword(upwd){

    return upwd.match(
        /^[a-zA-Z0-9!@#$%^&*]{6,16}$/    );
}

function validate(){
    let uname = document.getElementById('uname');
    let upwd = document.getElementById('upwd');


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
}
*/