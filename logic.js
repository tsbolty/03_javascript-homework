


var specialCharacterOptions = ['!', '@', '#', '$', '%', '^', '&','*', '(', ')', '_', '-', '=', '+', '[', ']', '{', '}', '|', "/", "/", '*', '-', '<', '>', ':', ';']
var lowerLetterOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperLetterOptions = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

var passwordLength;

var userChoices =[]


function getUserInput(){
    

    var passwordLength = prompt("How long would you like your password to be?")

    if (passwordLength < 8 || passwordLength > 128){
        alert("Password must be between 8 and 128 characters")
        return
    } 

    if (isNaN(passwordLength)===true){
        alert("Password must be a number")
        return
    }

    var wantsNumber = confirm("Do you want any numbers in your password?")


    var wantsUpper = confirm("Do you want upper case letters in your password?")


    var wantsLower = confirm("Do you want any lower cased letters in your password?")

   
    var wantsSpecial = confirm("Do you want any special characters in your password?")


    if (
        wantsLower == false &&
        wantsUpper == false &&
        wantsSpecial == false &&
        wantsNumber == false
    ){
        alert("You must select at least one of these options, please try again")
        return
    }

    var passwordOptions = {

        length: passwordLength,
        wantsNumber: wantsNumber,
        wantsUpper: wantsUpper,
        wantsLower: wantsLower,
        wantsSpecial: wantsSpecial

    }

    return passwordOptions
    


}




function getRandom(arr){
    var randomIndex = Math.floor(Math.random() * arr.length)
    var randomElement = arr[randomIndex]
    return randomElement
}



function generatePassword(){
    var options = getUserInput();
    var guaranteedChars = [];
    var possibleChars = [];
    var passwordResult = [];

    if (options.wantsSpecial){
        possibleChars = possibleChars.concat(specialCharacterOptions)
        guaranteedChars.push(getRandom(specialCharacterOptions))
    }
    if (options.wantsNumber){
        possibleChars = possibleChars.concat(numberOptions)
        guaranteedChars.push(getRandom(numberOptions))
    }
    if (options.wantsUpper){
        possibleChars = possibleChars.concat(upperLetterOptions)
        guaranteedChars.push(getRandom(upperLetterOptions))
    }
    if (options.wantsLower){
        possibleChars = possibleChars.concat(lowerLetterOptions)
        guaranteedChars.push(getRandom(lowerLetterOptions))
    }
    for(i=0; i<options.length; i++){
        var possibleChar = getRandom(possibleChars)
        passwordResult.push(possibleChar)
    }
    for(i=0; i<guaranteedChars.length; i++){
        passwordResult[i] = guaranteedChars[i]
    }
    console.log(passwordResult)
    return passwordResult.join("")
}
var generateButton = document.querySelector("#generate")

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateButton.addEventListener("click", writePassword)






