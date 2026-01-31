
let clock = document.querySelector('#clock');


// let nowTime = date.toLocaleString('default',{
//     second:"2-digit",
//     minute:"2-digit",
//     hour:"2-digit",
//     day:"2-digit",
//     weekday:"short"
// })

let timeCont = setInterval(function(){
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString(); 
}, 1000);




