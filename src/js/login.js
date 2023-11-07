// step  1  add click event handler with the submit button
document.getElementById("btn-submit").addEventListener("click", function () {
  // step 2  getting email and password id inside the input filed and remember one thing if u want input field text then always use .value 
  const emailField = document.getElementById("user-email");
  const email = emailField.value;
  const passwordField = document.getElementById("user-password");
  const password = passwordField.value;
  if (email === "akash@baperbank.com" && password === "1234") {
    window.location.href = "bank.html"
  }
  else {
    console.log("invalid user ");
  }
});
