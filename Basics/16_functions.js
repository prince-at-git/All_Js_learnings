/*Key pts*
 1. After "return" no statement below it would be executed inside a Function
 2. we can performe string interpolation inside the fnc with return
 3. if arguments(s) are empty or not of the expected datatype then do:-
    A. Check the type of the given argument with the parameter
    B. set an example value as arg for the parameter, that would be used when args is empty
        - this default value can be overwritten when args are passed to the paramenter
 
 Q4. "Rest parameters" How to pass multiple arg(s) to one parameter as an array -> ANS use rest operator (...)
 Q5. how to pass OBJs are parameters inside a functions

*/

//+++++++++++++++++++++++++-----------BASICS--------------++++++++++++++++++++++++
function addTwoNums(num1, num2){

    let value = num1 +num2;
    return value;

    console.log(result);// this will never be executed--Refer to pt 1.
}

let result = addTwoNums(3,50);
// console.log(result);


//String interpolation with return
function isloggedIn(userName) {
    return `${userName} has logged in to the website`
}

// console.log(isloggedIn("Prince"));


// Placeholder value for parameter -- refer to pt 3->B
function isloggedIn(userName = "exampleName") { // "examplename" would be used as the default value if the args is not given.
    return `${userName} has logged in to the website`
}

// console.log(isloggedIn());

//+++++++++++++++++++----------------ADVANCE----------------------++++++++++++++++++++++++


// Q4
//*"Rest parameters" or rest operator in function: 
// ----The rest parameter syntax allows a function to accept an indefinite number of arguments as an array


function calculateCartPrice(...nums){// the (...) here is rest operator
    return nums;
}

var calculateCartPrice_value = calculateCartPrice(100,200,300,400,500);
// console.log(calculateCartPrice_value);// [ 100, 200, 300, 400, 500 ]



//Q5
//Objs as parameters of functions

let userObj = {
    name: "Prince",
    price: 500
}

function handleObjects(anyObject){
    console.log(`Username is ${anyObject.name} and the price is ${anyObject.price}`);
}

handleObjects(userObj) // passing the Obj

handleObjects({ // apssing as the OBJ
    name:"Abhishek",
    price: 600
})


