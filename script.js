// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Separate function to generate random password based on user criteria choice//
function generatePassword() 

  //Prompt to enter desired length of password
  var length=Number(prompt("How many characters will your password be?Please choose between 8 and 28 characters"));

  //Confirms user slelected a number between min and max
  if (length < 8 || length > 128) {
    alert("Incorrect choice. Password must be between and 128 characters");
    location.reload()


} else {  // Variables and conditionals statements that log user choices and choose the criteria that applies to generated password}
  var includeUpper = confirm("Include uppercase letters?");
  var includeLower = confirm("Include lower case letters?");
  var includeNUmber = confirm("Include Numerical characters?");
  var includeSpecial = confirm("Include special characters?");
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var number = "0123456789";
  var special = "~`!@#$%^&*()-_=+[{]}\|;:',<.>/?";
  var charChoice = "";
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
