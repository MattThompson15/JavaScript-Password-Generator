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
  var length=Number(prompt("How many characters will your password be? Please choose between 8 and 28 characters"));

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
// If user chose to include at least one or all of the criteria.

if (includeUpper) {
  charChoice += upper;
}
if (inlcudeLower) {
  charChoice += lower;
}
if (includeNumber) {
  charChoice += number;
}
if (inlcudeSpecial) {
  charChoice += special;
}

// If user did not follow any othe criteria selections, they must start over and choose at least one.
if (charChoice == "") {
  alert("Passwrod must inlcude at least one character from criteria selection, press OK to refresh the page")
  location.reload();
}

do {
  // Variable and statements that will generate new password based on user criteria choice.
  var newPassword = "";
  for (var i = 0; i < length; i++) {
    //chooses random characters within the selected criteria category based on lenght set by user
    newPassword += charChoice. charAt(Math.floor(Math.random() * charChoice.length));

  }
console.log(newPassword)
var hasLower = false;
var hasUpper = false;
var hasNumber = false;
var hasSpecial = false;

for (var i = 0; i < newPassword.length; i++) {
  var char = newPassword[i];

  if (lower.includes(char)) {
    hasLower = true;
  } else if (upper.includes(char)) {
    hasUpper = true;
  } else if (number.includes(char)) {
  } else if (special.includes(char)) {
    hasSpecial = true;
  }
}

} while (
  (includeLower && !hasLower) ||
  (includeUpper && !hasUpper) ||
  (includeNUmer && !hasNUmber) ||
  (includeSpecial && !hasSpecial) 
)

// return newPassword;
return newPassword;


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
