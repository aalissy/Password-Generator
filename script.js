// Assignment code here
// Characters listed with uppercase and lowercase letters, numbers, and symbols
var characters = {
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lower: "abcdefghijklmnopqrstuvwxyz",
  numbers: "1234567890",
  symbols: "!@#$%^&*()-_+=~`{}[]\|;:'<,>.?/"
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function created to generate password
function generatePassword() {
  // Prompt that asks how many characters the password should be
  var passLength = prompt("How long do you want your password to be?");
  // Alert that tells the user the password is too short
  if (passLength < 8) {
    alert("Password is too short! Must be at least 8 characters.");
  // Alert that tells the user the password is too long
  } else if (passLength > 128) {
    alert("Password is too long! Must be 128 or less characters.");
  // Confirms whether the user wants uppercase or lowercase letters, numbers, or symbols
  } else {
    var passUpper = confirm("Do you want your password to include uppercase letters?");
    var passLower = confirm("Do you want your password to include lowercase letters?");
    var passNumbers = confirm("Do you want your password to include numbers?");
    var passSymbols = confirm("Do you want your password to include symbols?");
  }
  // If user wants all return all
  if (passUpper && passLower && passNumbers && passSymbols) {
    var pass = characters.upper.concat(characters.lower, characters.numbers, characters.symbols);
  // If user wants none alerts the user that it needs to contain at least one option
  } else if (!passUpper && !passLower && !passNumbers && !passSymbols) {
    alert("Password must contain at least one of these options.");
  // If user wants only symbols
  } else if (!passUpper && !passLower && !passNumbers && passSymbols) {
    pass = characters.symbols;
  // If user wants only numbers
  } else if (!passUpper && !passLower && passNumbers && !passSymbols) {
    pass = characters.numbers;
  // If user wants only lowercase letters
  } else if (!passUpper && passLower && !passNumbers && !passSymbols) { 
    pass = characters.lower;
  // If user wants only uppercase letters
  } else if (passUpper && !passLower && !passNumbers && !passSymbols) {
    pass = characters.upper;
  // If user wants upper and lowercase letters
  } else if (passUpper && passLower && !passNumbers && !passSymbols) {
    pass = characters.upper.concat(characters.lower);
  // If user wants uppercase leetters and numbers
  } else if (passUpper && !passLower && passNumbers && !passSymbols) {
    pass = characters.upper.concat(characters.numbers);
  // If user wants uppercase letters and symbols
  } else if (passUpper && !passLower && !passNumbers && passSymbols) {
    pass = characters.upper.concat(characters.symbols);
  // If user wants lowercase letters and numbers
  } else if (!passUpper && passLower && passNumbers && !passSymbols) {
    pass = characters.lower.concat(characters.numbers);
  // If user wants lowercase letters and symbols
  } else if (!passUpper && passLower && !passNumbers && passSymbols) {
    pass = characters.lower.concat(characters.symbols);
  // If user wants numbers and symbols
  } else if (!passUpper && !passLower && passNumbers && passSymbols) {
    pass = characters.numbers.concat(characters.symbols);
  // If user wants upper and lowercase letters and numbers
  } else if (passUpper && passLower && passNumbers && !passSymbols) {
    pass = characters.upper.concat(characters.lower, characters.numbers);
  // If user wants upper and lowercase letters and symbols
  } else if (passUpper && passLower && !passNumbers && passSymbols) {
    pass = characters.upper.concat(characters.lower, characters.symbols);
  // If user wants uppercase letters, numbers, and symbols
  } else if (passUpper && !passLower && passNumbers && passSymbols) {
    pass = characters.upper.concat(characters.numbers, characters.symbols);
  // If user wants lowercase letters, numbers, and symbols
  } else if (!passUpper && passLower && passNumbers && passSymbols) {
    pass = characters.lower.concat(characters.numbers, characters.symbols);
  }

// Blank finished password
var finishedPass = "";
// For loop that adds the blank finished password to the randomly generated letters, numbers, and symbols to the entered length of the desired password
for (var i = 0; i < passLength; i++) {
  finishedPass = finishedPass + pass[Math.floor(Math.random() * pass.length)];
}
// Returns the finished password to the generated password box
return finishedPass;
}