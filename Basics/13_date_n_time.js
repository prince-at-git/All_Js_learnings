//++++++++++-------DATE-------++++++++++++

let myDate = new Date();

// console.log(myDate); //     2025-12-14T09:10:49.889Z

// console.log(myDate.toString());//   Sun Dec 14 2025 14:40:49 GMT+0530 (India Standard Time)

// console.log(myDate.toDateString());//   Sun Dec 14 2025

// console.log(myDate.toLocaleString());//     14/12/2025, 2:40:49 pm

// console.log(myDate.toLocaleDateString());// 14/12/2025

// console.log(myDate.toJSON());// 2025-12-14T09:10:49.889Z



let myCreatedDate = new Date(2026, 1, 26);
// console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now(); // gives the "now" time in milisecond
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// let newDate = new Date();
// console.log(newDate.getHours()); // use ".get" methods to find key parts like :- hours, second, month, etc


// *IMP* Method to rembember :-------------------------------------------------------------------------------------------------------------------------------------------------------------

let newDate = new Date();

var theDate = newDate.toLocaleString('default',{ //custom way to defining the date & time
    hour:"2-digit",
    day:"2-digit",
    weekday: "long",
    month:"long",
    year:"numeric"
})


console.log(theDate)


