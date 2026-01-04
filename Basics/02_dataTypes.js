"use strict"; // treats all JS code as newer version
//documents to prefer -> mdn & tc39



// primitive data Types

// number => 2 to power 53
// bigint
    const bigNumber = 34567812345767435345n //`n` is required to declare BigInt
// string
// boolean
// null => standalone value -> a = null -> value for a is empty
// undefined => value is not assigned "yet"

// symbol => unique -> mostly used in react
const uniqueID_1 = Symbol(`123`);
const uniqueID_2 = Symbol(`123`);//Symbol can be same but it, it'll still be unique
console.log( uniqueID_1 === uniqueID_2); // false:- they are not equal
console.log(typeof(uniqueID_1));
console.log(typeof(uniqueID_2));



// adv data types :- Refernce Type(Non-Primitive)
    // Array, Objects, Functions
//array:-
const heros = ["Ryokendo", "power rangers"]

//objects:-
    
    // console.log(typeof undefined );// undefined
    // console.log(typeof null); //object
const personCard_Obj = {
    name: `prince`,
    age:`20`,
    clgYear:`3`
}



