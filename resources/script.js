// Assignment code here
// Get references to the #generate element & variables
var generateBtn = document.querySelector("#generate");
var createPassword = [];
var userPasswordLength = "";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "1234567890";
var special = "!?@#$%^&*"

// Write password to the #password input
function writePassword() {
  // resets password array after clicking button for new password.
  createPassword = [];
  generatePassword();
}

// Will run through each function to ask user prompts
function generatePassword() {
  passwordLength();
  passwordLowercase();
  passwordUppercase();
  passwordNumeric();
  passwordSpecial();
  createUserPassword();
}

// Asks user for desired password length.
function passwordLength() {
  var userInputLength = window.prompt("Choose your password length. \n It must be a minumum of 8 and maximum of 128 characters. \n Ex: 30.");
  // Checks for correct length
  if (userInputLength > 128) {
    alert("Please try again, your password was too long. \n Must not be greater than 128.");
    passwordLength();
  } else if (userInputLength < 8) {
    alert("Please try again, your password was too short. \n Must not be less than 8.");
    passwordLength();
  } else {
    // assign new length to variable
    userPasswordLength = userInputLength;
  }
}

// Asks user if they want lowercase based on if they choose "Ok" or "CANCEL". Will add lowercase if Ok is selected.
function passwordLowercase() {
  if (window.confirm("Would you like LOWERCASE letters included in your password? \n 'OK' to include lowercase. \n 'Cancel' for no lowercase.")) {
    createPassword.push(lowercase);
  }
}

// Asks user if they want uppercase based on if they choose "Okay" or "CANCEL". Will add uppercase if Ok is selected.
function passwordUppercase() {
  if (window.confirm("Would you like UPPERCASE letters included in your password? \n 'OK' to include uppercase. \n 'Cancel' for no uppercase.")) {
    createPassword.push(uppercase);
  }
}

// Asks user if they want numeric based on if they choose "Okay" or "CANCEL". Will add numbers if Ok is selected.
function passwordNumeric() {
  if (window.confirm("Would you like NUMBERS included in your password? \n 'OK' to include numbers. \n 'Cancel' for no numbers.")) {
    createPassword.push(numeric);
  }
}

// Asks user if they want special characters based on if they choose "Okay" or "CANCEL" .Will add special characters if Ok is selected.
function passwordSpecial() {
  if (window.confirm("Would you like SPECIAL CHARACTERS included in your password? \n 'OK' to include special characters. \n 'Cancel' for no special characters.")) {
    createPassword.push(special);
  }
  // If nothing chosen, user will be assigned random password using all character types.
  else {
    if (createPassword.length === 0) {
      alert("Please try again. \n You didn't select a character type. \n Please select at least one character type.");
      passwordLowercase();
      passwordUppercase();
      passwordNumeric();
      passwordSpecial();
    } 
  }
}

// Creates a new password based on the previous answers given by users from prompts.
function createUserPassword() {
  // Make the password a string for math random
  var passwordTogether = createPassword.join("");
  console.log(passwordTogether);

  // Get random characters from the string using charAt (used to return character from specified index) & math random.
  function getRandomCharacters(length) {
    var newPassword = "";
    for (var i = 0; i < length; i++) {
      newPassword += passwordTogether.charAt(Math.floor(Math.random() * passwordTogether.length));
    }
    return newPassword;
  }

  // set password length equal to length chosen by user made from random characters chosen from getRandomCharacters.
  var password = getRandomCharacters(userPasswordLength);

  // Moved code from function writePassword
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);