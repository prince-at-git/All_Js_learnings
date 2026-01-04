
// get access to button -> buttons
// get access to the button color on click
// store that color in a var -> newTheme
// get access to the body color -> oldthem
// put oldTheme = newTheme



let buttons = document.querySelectorAll('.button')
let body = document.querySelector('body')

buttons.forEach((button)=>{
    // console.log(button);
    button.addEventListener("click",(eventName)=>{
        console.log(eventName);
        console.log(eventName.target);//where the click was done// div 1 or 2 etc
        
        if(eventName.target.id ==='grey'){
            body.style.backgroundColor = eventName.target.id;
        }
        
        if(eventName.target.id ==='yellow'){
            body.style.backgroundColor = eventName.target.id;
        }
        
        if(eventName.target.id ==='white'){
            body.style.backgroundColor = eventName.target.id;
        }
        
        if(eventName.target.id ==='blue'){
            body.style.backgroundColor = eventName.target.id;
        }
        

    })
})





