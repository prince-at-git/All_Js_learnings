/*Key points*
 - for..of loop -> used in map & arrays -> return the values
 - for..in loops -> used to loop through objects & arrays -> return the key / index
 - forEach loops->  used to loop through arrays -> has access to "values, index, original array "


 - forEach is more of a method used in array operations rather then a looping way
 - TIP:-
    (.) Arrays -> .forEach() -> access to {values, index, orginal array}
    (.) Maps -> for...of loop -> to access value
    (.) Objects -> for...in loop -> to access the keys/indexs

*/



// --------------------------FOR OF LOOP -------------------------------------------------------------------------------------------------------

let arr_num = [1,2,3,4,5,6,7,8,9];

//for-of loop - no need to specify arrat length & no increment/decrement
// for (const num of arr) {
//     // console.log(num);
// }


//++++++++++++++++++---------Maps in js (INTRO)--------++++++++++++++++++++++++++++++++++
// holds key-value pairs and remembers the original insertion order of the keys.

var country_map = new Map();
country_map.set('In',"India")
country_map.set('USA',"United States Of America")
country_map.set('Fs',"France")

// console.log(country_map);

// Q1 how to set up loops in maps----------------

for (const key of country_map) {
    // console.log(key); // simple all values
}


for (const [key, value] of country_map) { // use "[key, value]" to access the key & values of a map and object
    // console.log(key, ':-', value);
}


//--------------------------------------FOR IN LOOP ------------------------------------------------------------------------------------

// Q2 how to loop through an Objs => use "for-in" loop--------------------

const gameObj = {
    game_1 : "spiderman",
    game_2 : "NSUN4",
    game_3 : "Prototype 2"
}

// for (const [key, value] of gameObj) { // for-of loop doesn't work for objects
//     console.log(key, value);
// }

for (const key in gameObj) {
    // console.log(key); // to get the keys of the objects
    // console.log(`${key} :- ${gameObj[key]}`); // keys with values of those keys
}




//----------------------------FOR EACH LOOP --------------------------------

// To remember for each always returns "undefined"

const coding = ["js","ruby","java","python","php"]

coding.forEach(function(item){// because it's a call back function we don't need to give this fnc a name
    // console.log(item);
})


// all different parameter that for-each has => item, index, array

coding.forEach((item, index, arr) => {
    // console.log(item, index, arr);
})



// ---------------looping an array of objects-----------------------------------------------------------------------------------

const langs = [
    {
        langName: "JavaScript",
        langFileName: "js"
    },
    {
        langName: "Java",
        langFileName: "java"
    },
    {
        langName: "puthon",
        langFileName: "ps"
    },
    {
        langName: "C++",
        langFileName: "cpp"
    }
]


langs.forEach((items)=>{
    console.log(`${items.langName} uses ${items.langFileName} as the file type`  );
    
})



//++++++++++++++++++++++++------------------Final code-------------+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++




//for..of--------------------------------------------------------------------------
const country_map = new Map()

country_map.set('In',"India")
country_map.set('US',"usa")
country_map.set('RS',"Russia")

for(const item of country_map){
    // console.log(item);
}


// for..in-----------------------------------------------------------------------------------------------------------

const gameObj_2 = {
    game_1 : "spiderman",
    game_2 : "NSUN4",
    game_3 : "Prototype 2"
}

for(const key in gameObj_2){
    console.log(`${key} and ${gameObj_2[key]}`);
}




// forEach ----------------------------------------------------------------------------------------------------
const numsArr = [1,2,3,4,5,6,7,8,9,10];
numsArr.forEach((item, index, arr) => {
    // console.log(`${item} at ${index} of array ${arr}`);
})




