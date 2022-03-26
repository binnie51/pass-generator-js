// Assignment Code
var generateBtn = document.querySelector("#generate");

// Characters for password stored
const keyStrings = {
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  digit: "0123456789",
  special_char: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
};

// define function for the password generator 
function generatePassword() {
  var passwordCharSet = ""; // empty string for character prompts
  
  // series of prompts for the users
  var length = parseInt(prompt("How many characters would you like your password to contain? Plese enter a number from 8 to 128."));
  
  if (length < 8 || length > 128) {
    alert("Your password did not meet the required length. Please enter a valid length!");
    return null;
  }
  else if (!length) {
    alert("Please choose a number between 8 and 128!");
    return null;
  }
  else {
    var upper = window.confirm("Click OK if you would like to include uppercase letters.");
    if (upper) {
      passwordCharSet += keyStrings.upperCase;
    };

    var lower = window.confirm("Click OK if you would like to include lowercase letters.");
    if (lower) {
      passwordCharSet += keyStrings.lowerCase;
    };

    var num = window.confirm("Click OK to include numbers.");
    if (num) {
      passwordCharSet += keyStrings.digit;
    };

    var symbol = window.confirm("Click OK to include special characters.");
    if (symbol) {
      passwordCharSet += keyStrings.special_char;
    };
  }

  // conditionals for the password length
  var password = ""; // variable for the actual password being generated

  for (var i = 0; i < length; i++) {
    password += passwordCharSet[Math.floor(Math.random() * passwordCharSet.length)]
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);