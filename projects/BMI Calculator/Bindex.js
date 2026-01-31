/*
* Q1:- Why do we get the height and weigth inside
         of the event listener and not outside ?  
*/

const form = document.querySelector('form')

//ANS 1: 
//const height = parseInt(document.querySelector('#height').value)

// doing this above takes the value of height the movement page loads up,
// resulting in whatever value was in the height input before(null) to get inside
// meaning that we get null value of height.

// ^ this creates problems

// soln:- 
// we need the value only after they have been filled,
// therefore we need a trigger to tell us when the vals are filled
// hence we use a Event listener for 'submit'

// since, button inside a form= submit button(by default), so we use submit as an Event



form.addEventListener('submit', function(e){
    e.preventDefault()// in forms pressing "enter" submits the form, this fnc/ method stops this default behaviour

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')

    if(height === '' || height <=0 || isNaN(height)){
        result.innerHTML = "Please inter a valid height"
    }
})

