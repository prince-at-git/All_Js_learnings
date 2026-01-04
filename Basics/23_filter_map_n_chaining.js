/*Key points*
 1. filter() method-- same as forEach() method, diff is that filter has a return value whiilst forEach does not
 2. .map() method -> same as forEach, but this does return a value
        -> Use map() for looping operations as it does return a value as well
 
 3. using two or more methods on the same data like ".map() and .filter()"  or ".map().map().filter()" or ".filter().map().filter().map()"
  
 4. DIFFERENCE => .filter() v/s .map()
 - filter performs a true or false opertation on the values in accordance with the condition-> and gives the satisfying values
 - map performs a set of operation on a array/value on the array asnn return the updated content
*/


//++++++++++++++++++++++--------filter()------------++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
 
//-> array.filter((variable_forCallbackFnc) => filtring_Condition)


// Filter in arary
const numsArr = [1,2,3,4,5,6,7,8,9,10];
let filteredArr = numsArr.filter((nums) => (nums > 4)); // since filter has a return value we can assign it to a variable unlike forEach()
// console.log(filteredArr);

// filter in objects------------
const books = [
  {
    title: "The Midnight Garden",
    genre: "Fiction",
    edition: "1st",
    publish: "1990"
  },
  {
    title: "Code Warriors",
    genre: "Non-Fiction",
    edition: "2nd",
    publish: "2009"
  },
  {
    title: "Whispers in the Dark",
    genre: "Fiction",
    edition: "3rd",
    publish: "1999"
  },
  {
    title: "Beyond the Horizon",
    genre: "No-Fiction",
    edition: "1st",
    publish: "2024"
  },
  {
    title: "Echoes of Time",
    genre: "Fiction",
    edition: "4th",
    publish: "2020"
  }
];

const fictionBooks = books.filter((boks) => (boks.genre === "Fiction"));
// console.log(fictionBooks);

const earlyBooks = books.filter((boks) => (boks.publish <=2000));
// console.log(earlyBooks);



//----------------------------------map()----------------------------------------------------------------------------------------------

// -> same as forEach, but this does return a value
// -> Use map() for looping operations as it does return a value as well

const arr = [1,2,3,5,4,56,7,8,9,0,11];

let newArr = arr.map((vals) => (vals * 2));
// console.log(newArr);




//----------------------------chaining of methods-------------------------------------------------------------------------------------
//-> using two or more methods on the same data like ".map() and .filter()"  or ".map().map().filter()" or ".filter().map().filter().map()"
const numberArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];

// // simple way of writting
// let newArray = numberArray.map((num) => (num * 2)).filter((num) => (num%2) === 0);

// correct way of writing chainings
let newArray = numberArray
                .map((num) => (num * 2))
                .filter((num) => (num%2) === 0)
                .map((num) => (num + 1));

console.log(newArray);







