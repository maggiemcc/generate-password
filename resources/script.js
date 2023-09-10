// Assignment code here
// Get references to the #generate element & variables
var generateBtn = document.querySelector("#generate");
var password = [];
var createPassword = [];
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "1234567890";
var special = "!@#$%^&*"

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password)
}

// Will run through each function to ask user prompts
function generatePassword() {
  passwordLength();
  passwordLowercase();
  passwordUppercase();
  passwordNumeric();
  passwordSpecial();
  userPassword();
}

// Asks user for desired password length.
function passwordLength() {
  var userLength = window.prompt("Choose your password length. \n It must be a minumum of 8 and maximum of 128 characters. \n Ex: 30.");

  // Checks for correct length
  if (userLength >= 8 && userLength <= 128) {
    passwordLength = userLength;
  } else if (userLength < 8) {
    alert("Please try again, your password was too short. \n Must not be less than 8.");
    passwordLength();
  } else if (userLength > 128) {
    alert("Please try again, your password was too long. \n Must not be greater than 128.");
    passwordLength();
  } else {
    alert("Please try again. Enter a number between 8 and 128.");
    passwordLength();
  }
}

// Asks user if they want lowercase based on if they choose "Okay" or "CANCEL".
function passwordLowercase() {
  if (confirm("Would you like lowercase letters included in your password? \n Choose 'OK' to include lowercase. \n Choose 'Cancel' for no lowercase.")) {
    createPassword.push(lowercase);
  }
}

// Asks user if they want uppercase based on if they choose "Okay" or "CANCEL".
function passwordUppercase() {
  if (confirm("Would you like uppercase letters included in your password? \n Choose 'OK' to include uppercase. \n Choose 'Cancel' for no uppercase.")) {
    createPassword.push(uppercase);
  }
}

// Asks user if they want numeric based on if they choose "Okay" or "CANCEL".
function passwordNumeric() {
  if (confirm("Would you like numbers included in your password? \n Choose 'OK' to include numbers. \n Choose 'Cancel' for no numbers.")) {
    createPassword.push(numeric);
  }
}

// Asks user if they want special characters based on if they choose "Okay" or "CANCEL".
function passwordSpecial() {
  if (confirm("Would you like special characters included in your password? \n Choose 'OK' to include. \n Choose 'Cancel' for no special characters.")) {
    createPassword.push(special);
  }
}

// Creates a new password based on the previous answers given by users from prompts.
function userPassword() {
  // Make the password a string:
  var passwordTogether = createPassword.join("");

  // Get random characters from the variable passwordTogether using charAt (used to return character from specified index) & math floor & math random.
  function getRandomCharacters(length) {
    var newPassword = "";
    for (var i = 0; i < length; i++) {
      newPassword += passwordTogether.charAt(Math.floor(Math.random() * passwordTogether.length));
    }
    return newPassword;
  }

  // set password equal to length chosen by user with random characters chosen.
  var password = getRandomCharacters(passwordLength);

  // Moved code from writePassword function
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);