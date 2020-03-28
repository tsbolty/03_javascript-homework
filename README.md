# 03_javascript-homework

I started by creating every possible character for each character calss and putting them in the corresponding variable.

Then I wrote a function to get input from the user about how long they would like their password to be, and which type of characters they would like to include in their password and stored those answers in variables to be called later.

I wrote in failsafes to make sure the user inputed a number between 8 and 128, to make sure the input is a number, and to make sure that they said yes to at least one of the character types.

Then I created a variable to return the password options the user selects.

I wrote a get random function to grab random characters from the list of possible characters of any given character type.

I then wrote my generate password function by checking the answers to the questions given to the user and running the random character function.

I also included a guaranteed characters array to pull from to make sure that the password that was generated included at least one of each of the criteria the user said yes to.

Then I returned the results in an array and joined them together to create a single string result.

I wrote a function to stop the alerts and prompts to the user until they click the "generate password" button.

I wrote a function to write the password to the page inside the text box.

