//Array of upper case characters for password.
var upperCaseCharacters = [ "A", "B", "C", "D", "E", "F", "G","H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "W", "X", "Y", "Z" ];

//Array of  lower characters for password.
var lowerCaseCharacter = [ "a", "b", "c", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "w", "x", "y", "z" ];

//Array of numeric characters for password.
var numericCharacter = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9" ];

//Array of special characters for password.
var specialCaharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "~", "`", "[", "]", "{", "}", "\\", "|", ",", ";", ":", "?", "/" ];

function generatePassword(){
//asking user choice
   var upperCaseCharacter = confirm("would you like to use uppeer case letter in your password?");
   var lowerCaseCharacter = confirm("would you like to use lower case letter in your password?");
   var numericCharacter = confirm("would you like to use numuric character in your password?");
   var specialCaharacter = confirm("would you like to use special character in your password?");
   //var  lengthOfCharacter = prompt("How long would you like to your password be?");
   while
      (upperCaseCharacter == false &&
        lowerCaseCharacter == false &&
        numericCharacter == false &&
        specialCaharacter ==false 
    ){
      alert("Must select at least one character");
      return;
    }
     
   var upperCaseCharacter = confirm("would you like to use uppeer case letter in your password?");
   var lowerCaseCharacter = confirm("would you like to use lower case letter in your password?");
   var numericCharacter = confirm("would you like to use numuric character in your password?");
   var specialCaharacter = confirm("would you like to use special character in your password?");


}
var lengthOfCharacter = parseInt(prompt("how long do you want your password to be? please choose password minimum 8 character and not more then 128 character"));
while (upperCaseCharacter < 8 || lowerCaseCharacter > 128 || typeof(lengthOfCharacter) != "number" || lengthOfCharacter === NaN || lengthOfCharacter === null){
alert ("your password must be between 8 to 128 character");
engthOfCharacter = parseInt(prompt("how long do you want your password to be? please choose password minimum 8 character and not more then 128 character"));
}

//console.log (lengthOfCharacter.length);
if (upperCaseCharacters == true ) {
    caseArray.push(upperCaseCharacters);
}

if(lowerCaseCharacter == true ){
    caseArray.push(lowerCaseCharacter);
}

if (numericCharacter == true ){
    caseArray.push(numericCharacter);
}

if (specialCaharacter == true ){
    caseArray.push(specialCaharacter);
}

// loop is for length of password

for (var i = 0; i<lengthOfCharacter; i++){
    var randomCharArrayNum;
    var selectedCharArray;
    var randomCharNum;
    var randomChar;
    
    randomCharArrayNum = parseInt(Math.floor(Math.random()*caseArray.length));

    selectedCharArray = caseArray[randomCharArrayNum];

    randomCharNum = Math.floor(Math.random()*selectedCharArray.length);

    randomChar =selectedCharArray[randomCharNum];

    passwordString+=randomChar;
    

}
 passwordEntry.textContent = passwordString;
function getuserOption(){
  var password ="#password";
   var userOption = getUserOption;

    return password;
}

var generateBtn = document.querySelector("#generate");

//write password to the password input
function writePassword(){
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
     passwordText.value = password;

}

generateBtn.addEventListener("click",writePassword);


