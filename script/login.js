const loginBtn = document.getElementById("login_btn");
const phoneNumber = document.getElementById("mobile_number");
const password = document.getElementById("password");
let Phone = "123456789";
const pinNumber = "1234";



// get valus function ===========
function getValue(id) {
  const values = document.getElementById(id).value;
  return values;
}
// login  addEventListener here
loginBtn.addEventListener("click", function () {
  const number = getValue("mobile_number");
  const password = getValue("password");

  //    condition checked here

  if (!number.trim()) {
    alert("Empty Phone Number");
    return;
  }

  if (number.length < 9) {
    alert("Input your 9 digit phone Number");
    return;
  }

  if (!password.trim()) {
    alert("Empty pin Number");
    return;
  }

  if (password.length < 4) {
    alert("Input 4 digit pin Number");
    return;
  }

  if (Phone == number && password == pinNumber) {
    setTimeout(function () {
      window.location.href = "home.html";
      loginBtn.innerText = "Login successfull";
    }, 2000);
    loginBtn.innerText = "Login";
  }

  phoneNumber.value = "";
  password.value = "";
});

const signUpBtn = document.getElementById("sign-up_btn");
signUpBtn.addEventListener("click", function () {
  document.getElementById("sign_up_container").style.display = "block";
  document.getElementById("sign_in_container").style.display = "none";
});

const signUpbtn = document.getElementById("signUp-btn");

signUpbtn.addEventListener("click", function () {
  const name = getValue("name");
  const email = getValue("email_input");
  const signUpPin = getValue("pin_number");

  if (!name.trim()) {
    alert("input your name");
    return;
  }

  if (!email.trim()) {
    alert("input your email");
    return;
  }

  if (!signUpPin.trim()) {
    alert("Set your pin");
    return;
  }

  // PIN must be exactly 4 digits
  if (!/^\d{4}$/.test(signUpPin)) {
    alert("PIN must be exactly 4 digits");
    return;
  }

  signUpbtn.innerText = "Processing...";

  setTimeout(function () {
    signUpbtn.innerText = "Sign Up Successful";
    window.location.href = "home.html";
  }, 2000);
});
