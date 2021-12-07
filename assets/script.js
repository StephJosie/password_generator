
var generateBtn = document.querySelector("#generate");

function generatePassword() {

    var characters = alert("You will be given a password of 12 characters");
    var numPrompt = alert("Password may contain numbers");
    var upper = alert("Would you like to include Upper Case letters?");
    var lower = alert("Would you like your password to contain lower case letters?");

    var characters = 12,
        charset = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        retVal = "";
    for (var i = 0, n = charset.length; i < characters; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}








function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}





generateBtn.addEventListener("click", writePassword);






