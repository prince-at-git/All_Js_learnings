
// [] take the user input on submit
// [] generate a random  no. on submit
// [] campare these two no. on submit
// [] show result high or low
// [] remember user's input
// [] remember user's no. of attempts
// [] show them their last guessed no.



let randomNumber = parseInt(Math.random()* 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const startOver = document.querySelector('.resultParas');// will come in handy, after the user has exhausted their attempts


const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;// in these kind of games we need to have a "play" value if it's true then only we proceed furthur

if(playGame){
    addEventListener('click',function (e){
        e.preventDefault;// to prevent the form from sending the data to a server(it's default behaviour)
        const guess = parseInt(userInput.value);
        console.log(guess)
        validateGuess(guess);
    })
}



function validateGuess(guess){
    // to validate user input as an valid input or not i.e,. b/w 1-100
    if(isNaN(guess)){
        alert('please enter a valid number')
    } else if(guess < 1){
        alert('please enter a number more than 1')
    } else if(guess > 100){
        alert('please enter a number less than 100')
    } else{
        prevGuess.push();
        if(numGuess === 11 || numGuess >10){
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}`);
            endGame();
        } else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(){
    // to check if user input == random no.
    if(guess === randomNumber ){
        displayMessage(`You guessed it right`);
        endGame();
    } else if(guess < randomNumber ) {
        displayMessage(`Guess is TOOO low`);
    } else if(guess > randomNumber){
        displayMessage(`Guess is Too High`)
    }

}

function displayGuess(){
    //
    userInput.value = '';// to clean the value; so that user can guess again
    guessSlot.innerHTML += `${guess},`
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}


function newGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', ''); // because they are an key & value pair we give ("") empty string as an empty value
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function endGame(){
    const newGameBtn = document.querySelector('#newGame')
    newGameBtn.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random()*100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute("disabled")
        startOver.removeChild
        playGame = true;
    })
}


