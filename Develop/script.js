// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  // Ask user for password length.
  var passLength = window.prompt("Choose your password length. It must be a minumum of 8 and maximum of 128 characters. Ex: 12");

  // Check for correct length
  if (passLength >= 8 && passLength <= 128) {
    console.log("passowrd lenght --->", passLength)
    return;
  } else {
    console.log("try again--->", passLength)
    window.prompt("Try again! Your password must be a minumum of 8 and maximum of 128 characters.");
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
