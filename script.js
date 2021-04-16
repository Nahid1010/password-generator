//Array of upper case characters for password.
var upperCaseCharacters = [ "A", "B", "C", "D", "E", "F", "G","H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "W", "X", "Y", "Z" ];

//Array of  lower characters for password.
var lowerCaseCharacter = [ "a", "b", "c", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "w", "x", "y", "z" ];

//Array of numeric characters for password.
var numericCharacter = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9" ];

//Array of special characters for password.
var specialCaharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "~", "`", "[", "]", "{", "}", "\\", "|", ",", ";", ":", "?", "/" ];

var generateBtn = document.querySelector("#genarate");
function getUserOption(){
 // set variables for option
    var upperCaseCharacters = false;
    var  lowerCaseCharacter = false;
    var numericCharacter = false;
    var specialCaharacter =false;
}

function generatePassword(){
    var password ="#my password";
    var userOption = getUserOption;

    return password;
}
//write password to the password input
function writePassword(){
    var password = generatePassword();
    var passwordText = document.querySelector("password");
     passwordText.value = password;

}

generateBtn.addEventListener("click",writePassword);


