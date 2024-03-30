let search = $(".search");
let category = $(".category");
let area = $(".area");
let ingredient = $(".ingredients");
let contact = $(".contact");
let userName = $("#name");
let email = $("#email");
let phone = $("#phone");
let age = $("#age");
let pass = $("#pass");
let repass = $("#repass");
let nameErorr = $("#nameErorr");
let phoneError = $("#phoneError");
let emailError = $("#emailError");
let ageError = $("#ageError");
let passError = $("#passError");
let repassError = $("#repassError");
let submitBtn = $("#submitButton");
let inpu = $(".input");
let errorMsg=$(".error")
console.log(errorMsg);
function showBtn(){
  let disp="none"
  let a=true;
 for(let i=0;i<6;i++){
      if(errorMsg.eq(i).css("display")=="block"){
        disp="block"
      }
    
   if(inpu.eq(i).val()==""){
          a=false;
   };
     
 }
 if (disp=="none"&&a==true){
     submitBtn.removeAttr("disabled")
 }else{
  submitBtn.attr("disabled","disabled")
 }
}


let w = $("#sideNav").width();
$("#xmark").click(function () {
  closeSideNav();
});

function openSideNav() {
  $("#sideNav").animate({ left: 0 }, 400);
  $("#open").animate({ left: w }, 400);
  $("#xmark").attr("class", "fa-solid open-close-icon fa-2x fa-x");
  search.animate({ top: 0 }, 700);
  category.animate({ top: 0 }, 550);
  area.animate({ top: 0 }, 400);
  ingredient.animate({ top: 0 }, 250);
  contact.animate({ top: 0 }, 100);
}
function closeSideNav() {
  $("#open").animate({ left: 0 }, 300);
  $("#sideNav").animate({ left: -w }, 300);
  $("#xmark").attr("class", "fa-solid open-close-icon fa-2x fa-align-justify");
  $(".search").animate({ top: 200 }, 700);
  category.animate({ top: 200 }, 550);
  area.animate({ top: 200 }, 400);
  ingredient.animate({ top: 200 }, 250);
  contact.animate({ top: 200 }, 100);
}
$("#open").click(function () {
  if ($("#sideNav").css("left") == 0 + "px") {
    closeSideNav();
  } else {
    openSideNav();
  }
});

let flag = false;

closeSideNav();


function validateName() {
  let regex = /^[A-Za-z]{1,9}$/;
  return regex.test($("#name").val());
}

userName.on("input", function () {
  if (validateName() == false) {
    nameErorr.css("display", "block");
    showBtn()
  
  } else {
    nameErorr.css("display", "none");
    showBtn()
  }

});

phone.on("input", function () {
  console.log(phone.val());
  if (validatePhone() == false) {
    phoneError.css("display", "block");
    showBtn()
  } else {
    phoneError.css("display", "none");
    showBtn()
  }

});

function validatePhone() {
  let regex = /^01[0125][0-9]{8}$/;
  return regex.test(phone.val());
}

email.on("input", function () {
  if (validateEmail() == false) {
    emailError.css("display", "block");
    showBtn()
  } else {
    emailError.css("display", "none");
    showBtn()
  }
  }
  );

function validateEmail() {
  let regex = /^[A-Za-z0-9]{1,}(@)[A-Za-z]{1,}\.[A-Za-z]{2,}/;
  return regex.test(email.val());
}

age.on("input", function () {
  if (validateAge() == false) {
    ageError.css("display", "block");
    showBtn()
  } else {
    ageError.css("display", "none");
    showBtn()
  }
 
});

function validateAge() {
  let regex = /^[1-9]{1,2}$/;
  return regex.test(age.val());
}

pass.on("input", function () {
  if (validatePass() == false) {
    passError.css("display", "block");
    showBtn()
  } else {
    passError.css("display", "none");
    showBtn()
  }

});

function validatePass() {
  let regex = /^[a-z0-9]{8,}$/;
  return regex.test(pass.val());
}

repass.on("input", function () {
  validateRepass();
});

function validateRepass() {
  if (repass.val() != pass.val()) {
    repassError.css("display", "block");
    showBtn()
    
  } 
  else {
    repassError.css("display", "none");
    showBtn()
  }
 
}
