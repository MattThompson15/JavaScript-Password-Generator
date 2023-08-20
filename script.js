// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Separate function to generate random password based on user criteria choice//
function generatePassword() {

  //Prompt to enter desired length of password
  var length=Number(prompt("How many characters will your password be?Please choose between 8 and 28 characters"));

  //Confirms user slelected a number between min and max
  if (length < 8 || length > 128) {
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
