// Assignment code here
// Get references to the #generate element & variables
var generateBtn = document.querySelector("#generate");
var password = [];
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "1234567890";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Will run through each function to ask user prompts
function generatePassword() {
  passwordLength();
  passwordLowercase();
  passwordUppercase();
  passwordNumeric();
}

  // Asks user for desired password length.
function passwordLength() {
  var userLength = window.prompt("Choose your password length. \n It must be a minumum of 8 and maximum of 128 characters. \n Ex: 12, 50, 100");

  // Checks for correct length
  if (userLength >= 8 && userLength <= 128) {
    console.log("passowrd length --->", userLength);
    passwordLength = userLength;
    console.log(passwordLength);
    return;
  } else {
    console.log("try again--->", userLength)
    alert("Please try again, your password was too short or long. \n Must be between 8 and 128 characters.")
    passwordLength();
  }
}

// Asks user if they want lowercase based on if they choose "Okay" or "CANCEL".
function passwordLowercase() {
  if (confirm("Would you like lowercase letters included in your password? \n Choose 'OK' to include lowercase. \n Choose 'Cancel' for no lowercase.")) {
    password.push(lowercase);
    console.log("lowercase included", password);
    return;
  }
  else {
    console.log("Lowercase NOT included", password);
    return;
  }
}

// Asks user if they want uppercase based on if they choose "Okay" or "CANCEL".
function passwordUppercase() {
  if (confirm("Would you like uppercase letters included in your password? \n Choose 'OK' to include uppercase. \n Choose 'Cancel' for no uppercase.")) {
    password.push(uppercase);
    console.log("Uppercase included", password);
    return;
  }
  else {
    console.log("Uppercase NOT included", password);
    return;
  }
}

// Asks user if they want numeric based on if they choose "Okay" or "CANCEL".
function passwordNumeric() {
  if (confirm("Would you like numbers included in your password? \n Choose 'OK' to include numbers. \n Choose 'Cancel' for no numbers.")) {
    password.push(numeric);
    console.log("Numeric included", password);
    return;
  }
  else {
    console.log("Numeric NOT included", password);
    return;
  }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
