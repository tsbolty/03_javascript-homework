// need variables to hold special characters, letters, numbers
alert("hello")
//need to prompt user for how many of each kind of character to use( special characters, lower case letters, capitalized letters, numbers)

//need to prompt user for length of desired password

//need to validate answers from user to make sure they match the requirements

//at least 1 character type will be selected

//generate a random password to the users specifications

//display the password or write it to the page



var specialCharacterChoices = ['!', '@', '#', '$', '%', '^', '&','*', '(', ')', '_', '-', '=', '+', '[', ']', '{', '}', '|', "/", "/", '*', '-', '<', '>', ':', ';']
var lowerLetterChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperLetterChoices = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numberChoices = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

var passwordLength = prompt("How long would you like your password to be")

var characterSelections = prompt("How many special characters would you like in your password?")
Math.floor(Math.random * specialCharacters.length)

var lowerSelections = prompt("How many lower case numbers would you like in your password?")
Math.floor(Math.random * lowerLetters.length)

var upperSelections = prompt("How many upper case letters would you like in your password?")
Math.floor(Math.random * upperLetters.length)

var userNumSelection = prompt("How many numbers would you like in your password?")

    
if (passwordLength < 8){
    alert("Password must be longer than 8 characters")
} else if (passwordLength > 128){
    alert("Password must be shorter than 128 characters")
} else{
    
}






