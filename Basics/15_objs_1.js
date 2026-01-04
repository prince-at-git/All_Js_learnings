/*Key points*
 -> objs consists of [key : "value"]
        here both the key and the value are strr by default, but only value use "".
    to access the value of an Obj :-
        1. console.log(obj.key1) // gives value1 -- generally used way
        2. console.log(obje["key1"])// gives value1 -- this is preferred for situation like "Q2"

 Q1-> how to use symbol datatype as an value in objs?
 Q2-> how to use access a key given as a string, like { "key":"value"} ?
 Q3-> how to use Date and time methods in Objs?
 Q4-> how to "freeze" an Obj, so that none can change it's values in the future
 Q5-> how to use functions in obj?
 Q6-> use of "This" in objs
 Q7-> how to refernce the same OBJ?? ans :- we use "this"

*/

//Objects in js
// "To master js then master js's Objects and Events" - hitesh sir
// Declartion of Objs->

// 1.constructor(singleton is made)
const obj_Constructor = Object.create // obj made using constructor

// 2. Literal(singleton is not made)
const objLit = {};//obj made using obj literals


// Q3
var newDate = new Date();

var userTime = newDate.toLocaleString('default',{
    hour: "2-digit",
    month:"short",
    year:"2-digit",
    weekday:"short"
})


//Q2
var mySymbol = Symbol("this")

const user_obj = {
    firstName: "Prince",
    status: "Student",
    email: "soniprince.work@gmail.com",
    location: "Jodhpur",// type str

    "key":"value",//Q2 ans-> console.log(user_obj["key"]);

    [mySymbol]: "this", //Q1 -> type is symbol

    loginTime: userTime //Q3 -> type is undefined
}



//*Q4*/
// Object.freeze(user_obj)// now we can't update the obj's value(s) & we cant's use function(s) on this obj as well


//Q5
user_obj.greeting = function(){
    console.log("hello, World");
}
console.log(user_obj.greeting);//[Function (anonymous)] REASON :-gives the fnc rfrnc but does not execute it
console.log(user_obj.greeting()); // executes the fnc



//Q6 & Q7

user_obj.greetingTwo = function(){
    console.log(`Hello, ${this.firstName}, are you from ${this.location} ? your login time is ${this.loginTime}. we know that you are an ${this.status}. and your email address is \"${this.email}\"`);
    
}

user_obj.greetingTwo(); // this is to call the functions