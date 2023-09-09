// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var password = [];
var lowercase = "abcdefghijklmnopqrstuvwxyz";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


function generatePassword() {
  passwordLength();
  passwordLowercase();

}

  // Asks user for desired password length.
function passwordLength() {
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

// Asks user if they want lowercase based on if they choose "Okay" or "CANCEL".
function passwordLowercase() {
  if (confirm("Would you like lowercase included in your password? \n Choose 'OK' to include lowercase. \n Choose 'Cancel' for no lowercase.")) {
    password.push(lowercase);
    console.log("lowercase included", password);
    return;
  }
  else {
    console.log("no lowercase");
    return;
  }
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
