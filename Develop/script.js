// Window prompts determine which array to use for password criteria
// Create variables for user input choice of Length, Character, Symbols, Numbers
// ** Accepted answers (Y or N)

// Length prompt should only accept numbers between 8-128, use Number() method to set passwordLength value equal to number input
// ** If/Else statement will determine if input is valid
// ** Length prompt should only accept number values otherwise ask again

// If/Else statements used to determine what loops to be used and skipped when building password
//

// Create arrays of possible password character criteria 
// ** U = Upper case [A,...Z]
// ** L = Lower case [a,...z] 
// ** M = Mixed cases [a,...z, A,...Z]

// Create array of available symbols 
// If user want's symbols, have nested loop set to loop through symbol array once per loop through character array
// ** S = With symbols ["!",  "@",  "#",  "$",  "%",  "^",  "*",  "(",  ")",  "-",  "+",  "?",  "/",  "\"] 
// for (character, array, loop) {
//    for (symbol, array, loop) {}
// };

// 1. If user wants symbols, loop through symbol array and set symbol variable (S) to have value of random symbol index number
// 2. Push symbol variable into password variable at random
// 3. Push variable 

// Length must be between 8-128 characters
var passwordLength;
// Ask if password should have numbers - boolean value
var passwordNumber;
// Ask if the password should have symbols - boolean value
var passwordSymbols;
// Ask if the password should have upper case - boolean value
var passwordUpper;
// Ask if the password should have lower case - boolean value
var passwordLower;

// Two functions will be used to create the password
// ** Function ask() will determine user answers through prompts and set that as the corresponding variables values
// ** Function generate() will create the password based on the numeric and boolean values of the user's answers

// Ask if they wish to generate a password and store their answers values to the corresponding variables
var ask = function() {
  var userAnswer = window.prompt("Do you want to generate a random password? Y/N?");
  // Determine subsequent prompts and set variable values
  if (userAnswer === "Y" || userAnswer === "y") {
      // If yes the ask for length and convert input's string value to number value
      var length = window.prompt("Enter character length (8-128)");
      var passwordLength = Number(math.floor(length))
      // If the number value from input doesn't meet length criteria inform user input is invalid, ask again
      if (passwordLength < 8 || passwordLength > 128 || passwordLength === NaN) {
        window.alert("Invalid selection, please enter a whole number between 8-128");
        // Loop back to previous prompt if invalid answer is select
        ask();
      // Length value is determined. Determine boolean values for variables holding questions regarding character specifics
      } else {
        var passwordNumber = window.confirm("Do you want the password to have numbers?");
        var passwordSymbols = window.confirm("Do you want the password to contain symbols?");
        var passwordUpper = window.confirm("Do you want the password to contain uppercase letters?");
        var passwordLower = window.confirm("Do you want the password to have lowercase letters?");
        break;
      }
  } else {
        window.alert("No password will be generated.");
        break;
  };
};


// Create generate() function to run password generation
function generate() {
  // Determining if user wants to generate a password
  // **Accepted answers "Y", "y", "N", "n"
  var passwordPrompt = window.prompt("Would you like to generate a password?");
  // Determine if the user wishes to create a password
  if (passwordPrompt === "Y" || passwordPrompt === "y") {
    //Prompt should only accept number values or else prompt "Please enter valid answer"
    window.prompt("How many characters should be the password have?");
    //Convert the string number value to integer number to set password length
    passwordLength = math.floor(Number(window.prompt()))
    return passwordLength;
  }

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
