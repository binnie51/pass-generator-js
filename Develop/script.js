// Assignment Code
var generateBtn = document.querySelector("#generate");

// Characters for password
const keyStrings = {
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  digit: "0123456789",
  special_char: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
};

// define function for the password generator 
function generatePassword() {
  var passwordCharSet = ""; // empty str for character sets
  
  // series of prompts  
  var length = window.prompt("How many characters would you like your password to contain? Plese enter a number from 8 to 128.");
  
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
  

  // conditionals for password length
  var password = "";

  for (var i = 0; i < length; i++) {
    password += passwordCharSet[Math.floor(Math.random() * passwordCharSet.length)]
    if (length < 8 || length > 128) {
      alert("Your password did not meet the required length. Please enter a valid length!");
      return "Click button to begin generating your password!";
    }
    else {
      alert("You did not enter a valid input. Please enter a desired length for your password!");
      return "Click button to begin generating your password!";
    }
  }
  return password;
}
  

     
    // if (length < 8 || length > 128) {
    //   window.alert("Your password did not meet the required length. Please enter a valid length!");
    //   return "Click button to begin generating your password!";
    // } 
    // else if (length == null || length == "" || length == NaN || length == 0) {
    //   window.alert("You did not enter a valid input. Please enter a desired length for your password!");
    //   return "Click button to begin generating your password!";
    // } 
    // else {
      
  
    // }

 
  
 




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
