
let userLoggedIn = true;
let debitCard = true;

const user_obbjs = [ // OBJS just for fun heheheheheheheheheh
    {
        name: "Prince",
        unId: "123abc",
        email: "soniprince.work@gmail.com"
    },
    {
        name: "Abhi",
        unId: "321cba",
        email:"abhisheksoni.work@gmail"
    }
]

// de-structuring of the Obj
const {name} = user_obbjs[0];
const {unId} = user_obbjs[0];
const {email} = user_obbjs[0];

if(userLoggedIn && debitCard){
    // console.log(`Hello, ${name}, your uniqueID for the email "${email}" is ${unId}`);
}



// ++++++++++++++++++++++++-------SWITCH CASE--------------++++++++++++++++++++++++++++++++++++++
// -- Any statement after 'break' is never executed -- this is true for both "if" and "switch cases"

// month checker--------------------

// const month = 3;
// switch(month){
//     case 1:
//         console.log("JAN");
//         break;
//     case 2:
//         console.log("FEB");
//         break;
//     case 3:
//         console.log("MAR");
//         break;
//     case 4:
//         console.log("APR");
//         break;
//     case 5:
//         console.log("MAY");
//         break;
//     case 6:
//         console.log("JUN");
//         break;
//     case 7:
//         console.log("JUL");
//         break;
//     case 8:
//         console.log("AUG");
//         break;
//     case 9:
//         console.log("SEP");
//         break;
//     case 10:
//         console.log("OCT");
//         break;
//     case 11:
//         console.log("NOV");
//         break;
//     case 12:
//         console.log("DEC");
//         break;
//     default:
//         console.log("Enter a valid month no.");
//         break;
        
// }




//++++++++++++++++++++++++++--------------Truthy values-------------+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//suprising Truthy values
// "0", 'false', "false", " ", [],{}, function(){}


//Q1- How to check is the given array & object is empty or not inside the IF statement

const emptyArr = [];
const emptyObj = {};

if(emptyArr.length === 0){
    // console.log(`Array is empty`);
}
if(Object.keys(emptyObj).length === 0){
    // console.log(`Object is empty`);
}




//+++++++++++----Nullish Coalescing Operator(??): null undefined--------+++++++++++++++++++++++++++++++++


// (??) - this does type checking and assigns the diff value other then "null/undefined" to a variable
let val1;
val1 = 5 ?? 10; // 5

val1 = null ?? 10 // 10- basically if we expect to get null/undefined for a value then assign a different value

console.log(val1);




//++++++++++++++++++++++++++---------------Ternary operator---------------++++++++++++++++++++++++++++++++++++++++++++

// condition ? true : false;

let nums = 4;
(nums%2 === 0) ? console.log(`The number ${nums} is even`): console.log(`The number ${nums} is Odd`) ;
