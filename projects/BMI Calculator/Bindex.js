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

    if( height <=0 || isNaN(height)){
        result.innerHTML = "Please enter a valid height"
    } else if( weight <=0 || isNaN(weight)){
        result.innerHTML = "Please enter a valid weight "
    } else{
        const bmi = (weight/((height*height)/10000)).toFixed(2)// to fixed:- to get value till 2 decimal point

        // show the result
        result.innerHTML = `<span>${bmi}</span>`;
        
        // we want to validate the if statements after the form has been submitted 
        if(bmi < 18.6 && bmi !== 0){
            guidePicker("#under");
        }else if (bmi >= 18.6 && bmi <= 24.9){
            guidePicker("#normal");
        }
        else if(bmi > 24.9){
            guidePicker("#over")
        }
        else{
            result.innerHTML = "Error: 404";
        }
            
    }
    
})

function guidePicker(value){
    const range = document.querySelector(value);
    range.style.backgroundColor = "burlywood";
    range.style.borderRadius = "20px";
}






