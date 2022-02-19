// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var pwLength = function() {
  var pwLength = window.prompt("How long would you like your password to be? Min 8 char, Max 128 char.");
  if(lengthPrompt < 8 || lengthPrompt > 128) {
    window.alert("INVALID - Password must be between 8 and 128 char.");
    return pwLength();
  }
  return lengthPrompt;
}

// prompt user for included character type.

var lwrCase = function() {
  var lwrCaseConf = window.confirm("Would you like LOWERCASE characters? Okay for YES, Cancel for NO.");
  return lwrCaseConf;
}

var upCase = function() {
  var upCaseConf = window.confirm("Would you like UPPERCASE characters? Okay for YES, Cancel for NO.");
  return upCaseConf;
}

var spec = function() {
  var specConf = window.confirm("Would you like SPECIAL characters? Okay for YES, Cancel for NO.");
  return specConf;
}

var num = function () {
  var numConf = window.confirm("Would you like NUMERIC characters? Okay for YES, Cancel for NO.");
  return numConf;
}

var generatePW = function() {
  var generatedLwrCase = lwrCase();
  var generatedUpCase = upCase();
  var generatedSpec = spec();
  var generatedNum = num();  
}

// Write password to the #password input
function writePassword() {
  var password = generatePW();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);