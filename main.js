//Selecting HTMLelements
const guessField = document.querySelector(".guessField");
const guessSubmit = document.querySelector(".guessSubmit")
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

//Declaring variables
let randomNumber = Math.floor((Math.random() * 100) + 1);
let noOfGuess = 1;
let resetButton;

//Analyzising the user's guess
function checkGuess(){
    const userGuess = Number(guessField.value); //Putting user entered val into a variable
    if (guesses === 1){
        guesses.textContent = "Your last guesses: "
    }
    guesses.textContent += userGuess + ' ';
    if (guesses === 7){
        lastResult.textContext = "You ran out of guesses, try again!";
        lowOrHi.textContent = ' ';
        endGame();
    } else if (userGuess === randomNumber){
        lastResult.textContext = "Yay! You guessed right!";
        lowOrHi.textContent = ' ';
        endGame();
    } else if (userGuess > randomNumber){
        lastResult.textContent = "Nope...wrong answer..";
        lowOrHi.textContent = "The correct number is lower..."        
    } else if (userGuess < randomNumber){
        lastResult.textContent = "Nope...wrong answer..";
        lowOrHi.textContent = "The correct number is higher..."        
    }

    //Clearing guess field and getting ready for the next guess
    guesses++; 
    guessField.textContent = '';
    guessField.focus();
}

//Submitting the guess functionality
guessSubmit.addEventListener('click', checkGuess);

//gameOver function to end game
function endGame(){
    guessField.disabled = true;
    guessSubmit.disabled = true;
    restartButton = document.createElement('button');
    resetButton.textContent = 'Start new game!'; 
    document.append(resetButton);
}