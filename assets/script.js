// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

    var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var resultsA = [];
var usedItemsArray = [];




    var characters = prompt ("Please choose a number between 8 and 15");
    var numPrompt = alert ("Password will contain numbers");
    var upper = alert ("Would you like to include Upper Case letters?");
    var lower = alert ("Would you like your password to contain lower case letters?");



    if (numPrompt) {
        resultsA = resultsA.concat(numbers);
    };


    if (upper) {
        resultsA = resultsA.concat(upperCase);
    };


    if (lower) {
        resultsA = resultsA.concat(lowerCase)
    };

    console.log(resultsA)

    for (var i = 0; i < characters; i++) {
        usedItemsArray.push (resultsA[Math.floor(Math.random() * resultsA.length)])
    }

    return usedItemsArray.join("")

//    retVal = (""); 
//     for (var i = 0; n = characters.length; i < length; ++i) {
//         usedItemsArray.push (resultsA [Math.floor(Math.random() * n.)]);
//      }

    //  retVal = ("");
    // for (var i = 0, n = characters.length; i < length; ++i) {
    //   retVal += resultsA.charAt(Math.floor(Math.random() * characters.length));
    // }
    // return retVal;
    



    // return usedItemsArray.join("");
}


    


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}





generateBtn.addEventListener("click", writePassword);




    

// function generatePassword() {
//     var length = 14
//     charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    // retVal = "";
    // for (var i = 0, n = charset.length; i < length; ++i) {
    //   retVal += charset.charAt(Math.floor(Math.random() * n));
    // }
//     return retVal;
