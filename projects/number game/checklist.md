# Number Guessing Game - Implementation Checklist

## Phase 1: Setup & Initialization

### Task 1.1: Generate Random Number
- [o] Use `Math.random()` to generate random decimal
- [o] Multiply by 100 to get range 0-100
- [o] Add 1 to shift range to 1-101
- [o] Use `parseInt()` to remove decimals
- [o] Store in variable `randomNumber`
- [o] Test: `console.log(randomNumber)` - should be between 1-100

### Task 1.2: Select DOM Elements
- [ ] Select submit button: `const submit = document.querySelector('#subt')`
- [ ] Select input field: `const userInput = document.querySelector('#guessField')`
- [ ] Select guesses display: `const guessSlot = document.querySelector('.guesses')`
- [ ] Select remaining attempts: `const lastResult = document.querySelector('.lastResult')`
- [ ] Select hint message area: `const lowOrHi = document.querySelector('.lowOrHi')`
- [ ] Select result container: `const startOver = document.querySelector('.resultParas')`
- [ ] Test: `console.log(submit, userInput, etc.)` - none should be `null`

### Task 1.3: Initialize Game State Variables
- [ ] Create empty array: `let prevGuess = []`
- [ ] Create attempt counter: `let numGuess = 1`
- [ ] Create game state flag: `let playGame = true`
- [ ] Create paragraph element: `const p = document.createElement('p')`
- [ ] Test: `console.log(prevGuess, numGuess, playGame)` - check initial values

---

## Phase 2: User Input Handling

### Task 2.1: Event Listener Setup
- [ ] Create `if(playGame)` conditional block
- [ ] Add click event listener to `submit` button
- [ ] Accept event parameter: `function(e)`
- [ ] Call `e.preventDefault()` with parentheses
- [ ] Get user input: `const guess = parseInt(userInput.value)`
- [ ] Log guess: `console.log(guess)` to verify
- [ ] Call `validateGuess(guess)` with the guess value
- [ ] Test: Click button, check if console logs guess

---

## Phase 3: Input Validation

### Task 3.1: Create validateGuess Function
- [ ] Define function: `function validateGuess(guess)`
- [ ] Accept `guess` parameter
- [ ] Check if `isNaN(guess)` → alert "Please enter a valid number"
- [ ] Check if `guess < 1` → alert "Please enter a number more than 1"
- [ ] Check if `guess > 100` → alert "Please enter a number less than 100"
- [ ] If all checks pass, add to history: `prevGuess.push(guess)`
- [ ] Check if 10th attempt: `if(numGuess === 10)`
  - [ ] If true: call `displayGuess(guess)`
  - [ ] Display game over: `displayMessage('Game Over. Random number was ${randomNumber}')`
  - [ ] Call `endGame()`
- [ ] If not 10th attempt:
  - [ ] Call `displayGuess(guess)`
  - [ ] Call `checkGuess(guess)`
- [ ] Test invalid inputs: "abc", 0, 150 - should alert
- [ ] Test valid input: 50 - should continue

---

## Phase 4: Game Logic

### Task 4.1: Create checkGuess Function
- [ ] Define function: `function checkGuess(guess)`
- [ ] Accept `guess` parameter
- [ ] If `guess === randomNumber`:
  - [ ] Call `displayMessage("You guessed it right!")`
  - [ ] Call `endGame()`
- [ ] Else if `guess < randomNumber`:
  - [ ] Call `displayMessage("Number is TOO low")`
- [ ] Else if `guess > randomNumber`:
  - [ ] Call `displayMessage("Number is TOO high")`
- [ ] Test: Enter number lower than random - should say "TOO low"
- [ ] Test: Enter number higher than random - should say "TOO high"
- [ ] Test: Enter correct number - should say "You guessed it right!"

---

## Phase 5: UI Updates

### Task 5.1: Create displayGuess Function
- [ ] Define function: `function displayGuess(guess)`
- [ ] Accept `guess` parameter
- [ ] Clear input field: `userInput.value = ''`
- [ ] Add guess to display: `guessSlot.innerHTML += '${guess} '`
- [ ] Increment counter: `numGuess++`
- [ ] Update remaining attempts: `lastResult.innerHTML = '${11 - numGuess}'`
- [ ] Test: Previous guesses should appear on screen
- [ ] Test: Remaining attempts should decrease

### Task 5.2: Create displayMessage Function
- [ ] Define function: `function displayMessage(message)`
- [ ] Accept `message` parameter
- [ ] Update hint area: `lowOrHi.innerHTML = '<h2>${message}</h2>'`
- [ ] Test: Message should appear in lowOrHi section

---

## Phase 6: End Game

### Task 6.1: Create endGame Function
- [ ] Define function: `function endGame()`
- [ ] Clear input field: `userInput.value = ''`
- [ ] Disable input: `userInput.setAttribute('disabled', '')`
- [ ] Add class to p: `p.classList.add('button')`
- [ ] Set button HTML: `p.innerHTML = '<h2 id="newGame">Start new Game</h2>'`
- [ ] Append to container: `startOver.appendChild(p)`
- [ ] Set game flag: `playGame = false`
- [ ] Call `newGame()` function
- [ ] Test: After 10 guesses or winning, input should be disabled
- [ ] Test: "Start new Game" button should appear

---

## Phase 7: Restart Game

### Task 7.1: Create newGame Function
- [ ] Define function: `function newGame()`
- [ ] Select new game button: `const newGameButton = document.querySelector('#newGame')`
- [ ] Add click event listener to newGameButton
- [ ] Inside click handler:
  - [ ] Generate new random number: `randomNumber = parseInt(Math.random() * 100 + 1)`
  - [ ] Reset previous guesses: `prevGuess = []`
  - [ ] Reset attempt counter: `numGuess = 1`
  - [ ] Clear guesses display: `guessSlot.innerHTML = ''`
  - [ ] Reset remaining attempts: `lastResult.innerHTML = '${11 - numGuess}'`
  - [ ] Clear hint message: `lowOrHi.innerHTML = ''`
  - [ ] Enable input: `userInput.removeAttribute('disabled')`
  - [ ] Remove new game button: `startOver.removeChild(p)`
  - [ ] Reactivate game: `playGame = true`
- [ ] Test: Click "Start new Game" button
- [ ] Test: All fields should be reset
- [ ] Test: Should be able to make new guesses

---

## Testing Checklist

### Functionality Tests
- [ ] **Random Number Generation**
  - [ ] Number is between 1-100
  - [ ] Different number each game

- [ ] **Input Validation**
  - [ ] Empty input → alerts "valid number"
  - [ ] Letters (abc) → alerts "valid number"
  - [ ] Zero (0) → alerts "more than 1"
  - [ ] Negative (-5) → alerts "more than 1"
  - [ ] Over 100 (150) → alerts "less than 100"
  - [ ] Valid number (50) → no alert, continues

- [ ] **Game Logic**
  - [ ] Lower guess → shows "TOO low"
  - [ ] Higher guess → shows "TOO high"
  - [ ] Correct guess → shows "You guessed it right!"
  - [ ] Correct guess → ends game immediately

- [ ] **UI Updates**
  - [ ] Previous guesses appear correctly
  - [ ] Remaining attempts decrease each turn
  - [ ] Input field clears after each guess
  - [ ] Messages appear in correct area

- [ ] **Attempt Limit**
  - [ ] Game ends after 10 guesses
  - [ ] Shows game over message with correct number
  - [ ] Input field becomes disabled
  - [ ] "Start new Game" button appears

- [ ] **Restart Functionality**
  - [ ] "Start new Game" button is clickable
  - [ ] All displays clear when clicked
  - [ ] New random number is generated
  - [ ] Input field re-enables
  - [ ] Can make new guesses
  - [ ] Button disappears after restart

### Console Tests
- [ ] Open DevTools (F12)
- [ ] No errors in console
- [ ] Console.log statements work (if any)

### Edge Cases
- [ ] Guess same number twice → should accept it
- [ ] Win on 10th attempt → should show win message, not game over
- [ ] Rapid clicking submit → should handle gracefully
- [ ] Press Enter in input field → should submit (default form behavior)

---

## Code Quality Checklist

### Function Parameters
- [ ] `validateGuess(guess)` - has parameter
- [ ] `checkGuess(guess)` - has parameter
- [ ] `displayGuess(guess)` - has parameter
- [ ] `displayMessage(message)` - has parameter
- [ ] No function uses variables without receiving them as parameters

### Function Calls
- [ ] `e.preventDefault()` - has parentheses
- [ ] `parseInt()` - has parentheses
- [ ] `push(guess)` - has argument
- [ ] `removeChild(p)` - has argument
- [ ] All function calls have parentheses

### Variable Scope
- [ ] `randomNumber` - accessible globally
- [ ] `guess` - passed as parameter where needed
- [ ] No undefined variable errors
- [ ] `playGame` flag works correctly

### Best Practices
- [ ] Consistent naming (camelCase)
- [ ] Meaningful variable names
- [ ] Comments explain complex logic
- [ ] Code is properly indented
- [ ] No unused variables

---

## Debugging Checklist (If Something Breaks)

### Step 1: Check Console
- [ ] Open DevTools (F12)
- [ ] Read error message carefully
- [ ] Note the line number
- [ ] Look for red error text

### Step 2: Common Issues
- [ ] Missing parentheses on function calls?
- [ ] Missing parameters in function definitions?
- [ ] Typos in variable names?
- [ ] Selecting wrong DOM element (check IDs/classes)?
- [ ] Missing semicolons (usually okay, but can cause issues)?

### Step 3: Add Debug Logs
- [ ] Add `console.log(guess)` after getting input
- [ ] Add `console.log(randomNumber)` to verify it exists
- [ ] Add `console.log('Function called')` at start of each function
- [ ] Check if variables have expected values

### Step 4: Test Incrementally
- [ ] Comment out later code
- [ ] Test each function individually
- [ ] Uncomment and test again
- [ ] Isolate the breaking point

---

## Completion Criteria

### Minimum Viable Product (Must Have)
- [ ] Game generates random number
- [ ] User can input guesses
- [ ] Game validates input
- [ ] Game provides hints (high/low)
- [ ] Game ends after 10 attempts or correct guess
- [ ] User can restart game

### Polish (Nice to Have)
- [ ] Clean, readable code
- [ ] Helpful comments
- [ ] Good variable names
- [ ] No console errors
- [ ] Smooth user experience

### Ready to Show
- [ ] All functionality works
- [ ] No bugs found in testing
- [ ] Code is clean and organized
- [ ] You understand every line
- [ ] You can explain how it works

---

## Final Steps

- [ ] Remove all `console.log()` debug statements (or keep useful ones)
- [ ] Add comments explaining complex logic
- [ ] Format code properly (indentation)
- [ ] Test one final time end-to-end
- [ ] Celebrate! 🎉

---

## Learning Reflection (After Completion)

- [ ] What was the hardest part?
- [ ] What concept finally "clicked"?
- [ ] What would you do differently next time?
- [ ] What JavaScript concept do you understand better now?
- [ ] What do you still need to practice?

---

## Next Steps (After This Project)

- [ ] Add difficulty levels (easy: 1-50, hard: 1-200)
- [ ] Add timer functionality
- [ ] Add score/points system
- [ ] Add animations for feedback
- [ ] Make it responsive for mobile
- [ ] Add sound effects
- [ ] Save high scores to localStorage