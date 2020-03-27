

// all possible character options broken down into character type
var specialCharacterOptions = ['!', '@', '#', '$', '%', '^', '&','*', '(', ')', '_', '-', '=', '+', '[', ']', '{', '}', '|', "/", "/", '*', '-', '<', '>', ':', ';']
var lowerLetterOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperLetterOptions = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
//empty variable to be filled with the users answer to how long they would like their password to be
var passwordLength;

// gets preferences from the user through prompts. asks them how long they would like their password to be and what kind of characters they would like in their password
function getUserInput(){
    
    var passwordLength = prompt("How long would you like your password to be?")

    /// covers if the user enters a number less than 8 or greater than 128, returns them to start
    if (passwordLength < 8 || passwordLength > 128){
        alert("Password must be between 8 and 128 characters")
        return
    } 
    // covers if the user inters anything that is not a number, returns them back to start
    if (isNaN(passwordLength)===true){
        alert("Password must be a number")
        return
    }

    // variables to store yes/no to what kind of characters the user wants in their password
    var wantsNumber = confirm("Do you want any numbers in your password?")

    var wantsUpper = confirm("Do you want upper case letters in your password?")

    var wantsLower = confirm("Do you want any lower cased letters in your password?")
   
    var wantsSpecial = confirm("Do you want any special characters in your password?")

    // covers if the user selects no to all types of characters
    if (
        wantsLower == false &&
        wantsUpper == false &&
        wantsSpecial == false &&
        wantsNumber == false
    ){
        alert("You must select at least one of these options, please try again")
        return
    }

    //holds all variables of password length and yes/no to each answer of character type
    var passwordOptions = {

        length: passwordLength,
        wantsNumber: wantsNumber,
        wantsUpper: wantsUpper,
        wantsLower: wantsLower,
        wantsSpecial: wantsSpecial

    }

    return passwordOptions
}

// generic random character generator to be referenced later
function getRandom(arr){
    var randomIndex = Math.floor(Math.random() * arr.length)
    var randomElement = arr[randomIndex]
    return randomElement
}

// generates the password by creating empty arrays for guaranteed characters, all possible characters based upon the user's answer to the previous questions and the result of the randomly generated password
function generatePassword(){
    var options = getUserInput();
    var guaranteedChars = [];
    var possibleChars = [];
    var passwordResult = [];

    // each of these adds all characters of that type to possibleChars array and pushes 1 of the characters from the character options array at the top of the page to the guaranteedChars array
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
    // for loop to loop through the number of times the user chose calls the get random function of the possibleChars array to get random characters from that array. then pushes the result of that to passwordResult array
    for(i=0; i<options.length; i++){
        var possibleChar = getRandom(possibleChars)
        passwordResult.push(possibleChar)
    }
    for(i=0; i<guaranteedChars.length; i++){
        passwordResult[i] = guaranteedChars[i]
    }
    // returns all the objects in the passwordResult array and joins them together to create a single string
    return passwordResult.join("")
}

// associates the #generate to the variable generateButton so we can create an event listener when it is clicked
var generateButton = document.querySelector("#generate")

// writes the password to the page
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  
  passwordText.value = password;

}

// voila!! listens for the click of the button and writes the glorious password we generated to the page
generateButton.addEventListener("click", writePassword)






