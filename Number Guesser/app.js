/*
GAME FUNCTION:
-Player must guess a number between a min and max
-Player gets a certain amount of guesses
-Notify players of guesses remaining
-Notify the player of the correct answer if looses
-Let player choose to play again
*/

//Game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

//UI Element
const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');

//Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//Play again event listner
//cannot use click event because as soon as when we click submit that this is it's already in effect with, play again is already there
//As soon as we release the mouse button then it basically clicks on play again automatically.
//So use mouseDown event not click
game.addEventListener('mousedown', function (e) {
    console.log('test1');
    if (e.target.className === 'play-again') {
        console.log('test')
        window.location.reload();
    }
});

//Lister for guess
guessBtn.addEventListener('click', function () {
    let guess = parseInt(guessInput.value);

    //Validate
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    //Check if won
    if (guess === winningNum) {
        //Game oven -won
        gameOver(true, `${winningNum} is correct, YOU WIN!`);
    }
    else {
        //Wrong number
        guessesLeft -= 1;

        if (guessesLeft === 0) {
            //Game over -lost
            gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`);
        }
        else {
            //Game continues-answer wrong
            //Change border color
            guessInput.style.borderColor = 'red';
            //clear input
            guessInput.value = '';
            //Tell user its wrong number
            setMessage(`${guess} is not correct. you have ${guessesLeft} guesses left`, 'red')
        }
    }

});

function gameOver(won, msg) {
    let color;
    won === true ? color = 'green' : color = 'red';
    //Disable input
    guessInput.disabled = true;
    //Change border color
    guessInput.style.borderColor = color;
    //Set message
    setMessage(msg, color);

    //PLay Again?
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg
}
