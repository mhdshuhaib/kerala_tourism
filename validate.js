// var name=document.getElementById("name");
// var errorName=document.getElementById("errorName");

var phone=document.getElementById("phone");
var errorPhone=document.getElementById("errorPhone");

var email=document.getElementById("email");
var errorEmail=document.getElementById("errorEmail");

var password=document.getElementById("password");
var errorPwd=document.getElementById("errorPwd");
// var errorPwd1=document.getElementById("errorPwd1");






function emailVal(){
  let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,4})(\.[a-z]{2,4})?$/
  if(regexp.test(email.value)){
   
      errorEmail.innerHTML = "valid";
      errorEmail.style.color="green";
      return true;

  }
  else{
    // console.log("false");
      errorEmail.innerHTML=" - Invalid email";
      errorEmail.style.color = "red";
      return false;
  }

}

function phoneVal(){
  let regph = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
  if (regph.test(phone.value)){
    errorPhone.innerHTML = "valid";
    errorPhone.style.color="green";
    return true;
  }
  else{
    errorPhone.innerHTML = " - Invalid Phone number";
    errorPhone.style.color="red";
    return false;

  }
}



function pwdVal(){
  let regpwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
  if(regpwd.test(password.value)){
    errorPwd.innerHTML = "valid";
    errorPwd.style.color="green";
    return true;
  }
  else{
    errorPwd.innerHTML = "Invalid";
    errorPwd.style.color="red";
    errorPwd.innerHTML = "password should contain min 8 characters including capital and small letters, numbers and special characters!!!";
    
    // alert("password should contain min 8 characters including capital and small letters, numbers and special characters!!!");
    
    return false;
   
    
  }


}
function isGood(password) {
  var password_strength = document.getElementById("password-text");

  //TextBox left blank.
  if (password.length == 0) {
    password_strength.innerHTML = "";
    return false;
  }

  //Regular Expressions.
  var regex1 = new Array();
  regex1.push("[A-Z]"); //Uppercase Alphabet.
  regex1.push("[a-z]"); //Lowercase Alphabet.
  regex1.push("[0-9]"); //Digit.
  regex1.push("[$@$!%*#?&]"); //Special Character.
  regex1.push("[0-9a-zA-Z]{8,}"); 

  var passed = 0;

  //Validate for each Regular Expression.
  for (var i = 0; i < regex1.length; i++) {
    if (new RegExp(regex1[i]).test(password)) {
      passed++;
    }
  }

  //Display status.
  var strength = "";
  switch (passed) {
    case 0:
    case 1:
    case 2:
      strength = "<small class='progress-bar bg-danger' style='width: 5vw'>Weak</small>";
      break;
    case 3:
      strength = "<small class='progress-bar bg-warning' style='width: 12vw'>Medium</small>";
      break;
    case 4:
      strength = "<small class='progress-bar bg-success' style='width: 20vw'>Strong</small>";
      break;

  }
  password_strength.innerHTML = strength;

}










