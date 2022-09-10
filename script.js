// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'Z']
var lowercase = uppercase.map(letter => {
  return letter.toLowerCase()
});
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '?']

// create prompts
// write generatePasssword function
function generatePassword() {
  var masterArray = []
  var finalPassword = []
  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters
  var passwordLength = window.prompt("How long do you want the password to be?");

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password length needs to be within 8 and 128 characters.");
    return null;
  }

  // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

  var textLower = window.confirm("Do you want Lower case letters?")

  var textUpper = window.confirm("Do you want Upper case letters?")

  var textNumber = window.confirm("Do you want Numeric characters?")

  var textSpecial = window.confirm("Do you want Special characters?")

  // THEN my input should be validated and at least one character type should be selected
  if (!textLower && !textUpper && !textNumber && !textSpecial) {
    alert('at least one option should be chosen!')
    return null;
  }

  if (textLower) {
    masterArray = masterArray.concat(lowercase)
  }
  if (textUpper) { 
    masterArray = masterArray.concat(uppercase) 
  }
  if (textNumber) { 
    masterArray = masterArray.concat(numbers) 
  }
  if (textSpecial) { 
    masterArray = masterArray.concat(special) 
  }

  for (var i = 0; i < passwordLength; i++) {
    // builds the random pasword


    
    finalPassword.push(random(masterArray))
  }


  return finalPassword.join('')
}

function random(array) {
  return array[Math.floor(Math.random() * array.length)]
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
