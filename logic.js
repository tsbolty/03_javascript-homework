// need variables to hold special characters, letters, numbers
alert("hello")
//need to prompt user for how many of each kind of character to use( special characters, lower case letters, capitalized letters, numbers)

//need to prompt user for length of desired password

//need to validate answers from user to make sure they match the requirements

//at least 1 character type will be selected

//generate a random password to the users specifications

//display the password or write it to the page



var specialCharacterOptions = ['!', '@', '#', '$', '%', '^', '&','*', '(', ')', '_', '-', '=', '+', '[', ']', '{', '}', '|', "/", "/", '*', '-', '<', '>', ':', ';']
var lowerLetterOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperLetterOptions = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

var passwordLength;
var numLength;
var lowerInput;
var upperInput;
var specialInput;
var passwordResult;



function getLengthInput(){
    passwordLength = prompt("How long would you like your password to be")
    console.log(passwordLength)
    validateLengthInput()
}

function validateLengthInput(){
    console.log('function called')
    if (passwordLength < 8){
        alert("You must select a number between 8 and 128");
        getLengthInput()
    } else{

    }
}
getLengthInput()

function getNumInput(){
    numLength = prompt("how many numbers would you like in you password")
    validateNumLength()
}

function validateNumLength(){
    if (numLength < 1){
        alert("you must have at least 1 number")
        getNumInput()
    } 
}
getNumInput()

function getLowerInput(){
    lowerLength = prompt("how many lower case numbers would you like in your password?")
    validateLowerLength()

}

function validateLowerLength(){
    if(lowerLength < 1){
        alert("you must have at least 1 lower case letter")
        getLowerInput()
    }
}
getLowerInput()

function getUpperInput(){
    upperLength = prompt("how many upper case letters would you like in your password")
    validateUpperLength()
    
}

function validateUpperLength(){
    if (upperLength < 1){
        alert("you must have at least 1 upper case letter in your password")
        getUpperInput()
    }
}
getUpperInput()

function getSpecialInput(){
    specialLength = prompt("how many special characters would you like in your password")
    validateSpecialLength()
}

function validateSpecialLength(){
    if (specialLength < 1){
        alert("you must have at least 1 special character in your password")
        getSpecialInput()
    }
}
getSpecialInput()

function lengthValidation(){
    if (numLength + upperLength + lowerLength + specialLength !== passwordLength){
        alert("your preferences do not add up to desired password length")
        getLengthInput()
        getLowerInput()
        getNumInput()
        getSpecialInput()
    } else{
        alert(passwordResult)
    }
}

for (var i = 0; i< numLength; i++){

    
    numLength = Math.floor(Math.random() * numOptions)
    console.log(numLength)

}
//we need a function for each prompt to check the users input and validate it, if it is not valid, we need to loop back through

// var characterSelections = prompt("How many special characters would you like in your password?")

// if (characterSelections < 1){
//     alert("You need at least 1 special character")
// } else if (characterSelections > 125){
//     alert("You cannot exceed 125 special characters")
// }
// // Math.floor(Math.random * specialCharacters.length)

// var lowerSelections = prompt("How many lower case numbers would you like in your password?")

// if (lowerSelections < 1){
//     alert("You need at least 1 lower case letter")
// } else if (lowerSelections > 125){
//     alert("you cannot exceed 125 lower case letters")
// }

// // Math.floor(Math.random * lowerLetters.length)

// var upperSelections = prompt("How many upper case letters would you like in your password?")

// if (upperSelections < 1){
//     alert("You need at least 1 upper case letter")
// } else if (upperSelections > 125){
//     alert("you cannot exceed 125 upper case letters")
// }

// // Math.floor(Math.random * upperLetters.length)

// var userNumSelection = prompt("How many numbers would you like in your password?")

// if (userNumSelection < 1){
//     alert("You need at least 1 number")
// } else if(userNumSelection > 125){
//     alert("You cannot exceed 125 numbers")
// }

    
// if (passwordLength < 8){
//     alert("Password must be longer than 8 characters")
// } else if (passwordLength > 128){
//     alert("Password must be shorter than 128 characters")
// } else{
    
// }






