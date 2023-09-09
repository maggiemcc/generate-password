// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var password = [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


function generatePassword() {
  passwordLength();

}

function passwordLength() {
  // Asks user for desired password length.
  var userLength = window.prompt("Choose your password length. It must be a minumum of 8 and maximum of 128 characters. Ex: 12");

  // Checks for correct length
  if (userLength >= 8 && userLength <= 128) {
    console.log("passowrd length --->", userLength);
    passwordLength = userLength;
    console.log(passwordLength);
    return;
  } else {
    console.log("try again--->", userLength)
    alert("Please try again, your password was too short or long. Must be between 8 and 128 characters.")
    passwordLength();
  }
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
