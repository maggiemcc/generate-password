// Assignment code here
// Get references to the #generate element & variables
var generateBtn = document.querySelector("#generate");
var password = [];
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "1234567890";
var special = "!@#$%^&*"

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
  passwordSpecial();
}

  // Asks user for desired password length.
function passwordLength() {
  var userLength = window.prompt("Choose your password length. \n It must be a minumum of 8 and maximum of 128 characters. \n Ex: 12, 50, 100");

  // Checks for correct length
  if (userLength >= 8 && userLength <= 128) {
    console.log("password length --->", userLength);
    passwordLength = userLength;
    alert(`You chose your password length to be ${userLength} characters long`);
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
    alert("Lowercase will be included in your password.");
    console.log("lowercase included", password);
    return;
  }
  else {
    alert("Lowercase will NOT be included in your password.");
    console.log("Lowercase NOT included", password);
    return;
  }
}

// Asks user if they want uppercase based on if they choose "Okay" or "CANCEL".
function passwordUppercase() {
  if (confirm("Would you like uppercase letters included in your password? \n Choose 'OK' to include uppercase. \n Choose 'Cancel' for no uppercase.")) {
    password.push(uppercase);
    alert("Uppercase will be included in your password.");
    console.log("Uppercase included", password);
    return;
  }
  else {
    alert("Uppercase will NOT be included in your password.");
    console.log("Uppercase NOT included", password);
    return;
  }
}

// Asks user if they want numeric based on if they choose "Okay" or "CANCEL".
function passwordNumeric() {
  if (confirm("Would you like numbers included in your password? \n Choose 'OK' to include numbers. \n Choose 'Cancel' for no numbers.")) {
    password.push(numeric);
    alert("Numbers will be included in your password.");
    console.log("Numeric included", password);
    return;
  }
  else {
    alert("Numbers will NOT be included in your password.");
    console.log("Numeric NOT included", password);
    return;
  }
}

// Asks user if they want special characters based on if they choose "Okay" or "CANCEL".
function passwordSpecial() {
  if (confirm("Would you like special characters included in your password? \n Choose 'OK' to include. \n Choose 'Cancel' for no special characters.")) {
    password.push(special);
    alert("special characters will be included in your password.");
    console.log("special characters included", password);
    return;
  }
  else {
    alert("special characters will NOT be included in your password.");
    console.log("special characters NOT included", password);
    return;
  }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
