/*Write a program that creates a secret random number between 1 and 100 and asks the user to guess it. 
After each guess, it should tell the user if their guess was too big, too small, or exactly right.

Write another program that asks the user to think of a secret number (but they shouldn't tell the program what it is!) and then the program tries to guess it. 
After each guess the program makes, the user needs to tell the program if the guess was too big, too small, or exactly right.

Can you make your program always succeed in 8 guesses? Can you make your program detect when the user has lied to it?*/

//ask user to come up with number
//computer guess 1 = 50
//if >50 ask 75, if <50 ask 25
// two variables, if too big, change top number, too small change bottom number
// add two variables together and divide by two

//CHANGE QUESTION TO SCALE

const readlineSync = require('readline-sync');

function letMeGuess() {
    let userInputBiggest = readlineSync.question("I'm going to guess a number that you've thought of, but first what number is the top end of the range?");
    if(userInputBiggest > 1000000){
        userInputBiggest = readlineSync.question("I can't work with a number that big, try again");
    }
    let biggestNumber = userInputBiggest;
    let smallestNumber = 1;
    let isComputerCorrect;
    console.log("OK. Let me know if my answer is 'too big', 'too small', or 'exactly right");

    while (isComputerCorrect !== true) {
        let computerGuess = Math.floor((biggestNumber + smallestNumber) / 2);
        console.log(computerGuess);
        let computerResponse = readlineSync.question(`Is it ${computerGuess}?`);
        if (computerResponse.toLowerCase() === 'too big') {
            biggestNumber = computerGuess;
            console.log("Let me try again");
        } else if (computerResponse.toLowerCase() === 'too small') {
            smallestNumber = computerGuess;
            console.log("Let me try again");
        } else if (computerResponse.toLowerCase() === 'yes') {
            console.log("I got it right!");
            isComputerCorrect = true;
        } else {
            console.log("Are you sure?");
        }
    }
}

letMeGuess();

function guessThenNumber() {
    let randomNumber = Math.ceil(Math.random() * 100);
    // console.log(randomNumber);

    console.log("I've thought of a random number, between 1 and 100, what number do you think it is?");
    let userGuess;

    while (userGuess !== true) {
        let getGuess = readlineSync.question("Have a go, what number is it?");
        if (getGuess > 100 || getGuess < 1) {
            console.log('Please choose a number between 1 and 100')
        } else if (randomNumber < getGuess) {
            console.log("Your guess is too big!");
        } else if (randomNumber > getGuess) {
            console.log("Your guess is too small");
        } else {
            userGuess = true;
            console.log("You got it exactly right!");
        }
    }
}

//guessThenNumber();
