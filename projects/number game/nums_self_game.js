// state management ?

//what to remember ?
// - secret random number
// - no. of guess left?
// - previous guess

// what happens when we load the page?
// - generate a random no. 
// - set event for click


// what happens on each guess?
// 1. Get user's guess
// 2. Validate it (1-100, is a number)
// 3. Check if correct/too high/too low
// 4. Update display
// 5. Check if game over

// What happens when game ends?
// - Disable input
// - Show "play again" button


let randomNum = parseInt(Math.random()*100+1);

const submitBtn = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
let prevGuess = document.querySelector('.prevGuess');
let attempts = document.querySelector('.remaining');

const lowOrHi = document.querySelector('.lowOrHi');


