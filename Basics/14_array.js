/*Notes*
 main things is array are:
    1. push()
    2. pop()

 slice -> [1,3): includes values from indices 1th to 2nd and not 3rd // just make a new copy of this from the original arr
 splice -> [1,3]: includes values from indices 1th to 3rd -> takes out this part from the original arr
 
 * arr =[0,1,2,3,4,5,6]
 * slice(1,3) => [1,2]-> arr remains the same : No changing of the source array
 * splice(1,3) => [1,2,3]->arr = [0,4,5,6] : changing of the source array
  
 array methods:-
 - unshift() : pushs an element at the start of the array
 - shift() : pops an element at the start of the array
 - includes() : does the array includes x element? -> true/ false
 - indexOf() : gives the index of x element
 - isArray(x) : boolean value: to check is x is array or not

 - Some array methods:-to remember {Array.isArray, Array.from, Array.of}

 Special-
 - concat(): joining of two arrs :- ** var allNums = evenNums.concat(oddNums) **
 - spread operator : [...arr1, ...arr2]: can add multiple arrays : **var allNums = [...evenNums, ...oddNums];**
*/


// let myArr = [1,2,3,4,5,6,7,8,9,0];

//+++++++++++++++++++++-----METHODs----++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// //push(n),pop()
// myArr.push(84);
// console.log(myArr);

// slice v/s splice

/**
 * arr =[0,1,2,3,4,5,6]
 * slice(1,3) => [1,2]-> arr remains the same : No changing of the source array
 * splice(1,3) => [1,2,3]->arr = [0,4,5,6] : changing of the source array
*/

// console.log("A", myArr);

// const myn1 = myArr.slice(1,3);
// console.log(myn1);

// console.log("B", myArr);


// const myn2 = myArr.splice(1,3);
// console.log("c", myArr);
// console.log(myn2);



//+++++++++++++++++++++++-------------------JOINING OF ARRAYS-----------------+++++++++++++++++++++++++++++++++++++++++++++
//Concatonation of two or more arrays


const evenNums = [2,4,6,8,10,12,14,16,18,20];
const oddNums = [1,3,5,7,9,11,13,15,17,19];

// var allNums = evenNums.concat(oddNums); // Concat() method
// console.log(allNums);


//++++++++++++++++++++++++++++++++++++++++++---------spread operator-------------++++++++++++++++++++++++++++++++++++++++++

// var allNums = [...evenNums, ...oddNums];
// console.log(allNums);


//+++++++++++++++++++++++++++++++++++++++-------Arrays Inside an Array----+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const mul_arr = [1,2,3,4,5,[4,6,2,6,7,[67,23,9,3,4,6]],3,5,7[1,4,7,8,3],1] // arr depth lvl -> 3
// const line_arr = mul_arr.flat(Infinity);//flat take depth lvl as an input 

// console.log(line_arr);


//Some array methods:-to remember {Array.isArray, Array.from, Array.of}

// console.log(Array.isArray("Prince"));//to check if the str is arr or not -> return a bool value
// console.log(Array.from("Prince"));//converts a str to arr, op-> [ 'P', 'r', 'i', 'n', 'c', 'e' ]

let score1 = 100;
let score2 = 200;
let score3 = 300;
let score4 = 400;

var score_arr = Array.of(score1,score2,score3,score4) // makes an array out of the given values
console.log(score_arr);


