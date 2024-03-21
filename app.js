
// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const guessInput = document.getElementById('guess');
    const guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert('Please enter a valid number between 1 and 100.');
        return;
    }

    attempts++;

    if (guess === randomNumber) {
        displayResult(`Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`);
        disableInput();
    } else if (guess < randomNumber) {
        displayResult('Too low! Try a higher number.');
    } else {
        displayResult('Too high! Try a lower number.');
    }
   
}

function displayResult(message) {
    const resultElement = document.getElementById('result');
    resultElement.textContent = message;
}

function disableInput() {
    const guessInput = document.getElementById('guess');
    guessInput.disabled = true;
}