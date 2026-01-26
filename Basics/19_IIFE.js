// Immediately Invoked Function Expressions (IIFE)
//  - immediately calling a function

/*Key points*
 - ";" semicolumn is very import to give so that the other IIFE could be executed as well
 - "()()" the first () is where fnc is written & the second () is the invoker that could also hold args to pass as parameter
 - named IIFE ->(function name(){})()
 - unNamed IIFE 'arrow function' -> (()=>{})()
*/



/*syntax*
 //standard IIFE
    (function () {
        // statements…
    })();

 //arrow function variant
    (() => {
        // statements…
    })();

*/



//1.1 named IIFE w/o parameter:-

(function hello(){
    console.log("hello, Named IIFE!! w/o parameter");
})();

//1.2 named IIFE with parameter:-
(function chai(parameter){
    console.log(`Hello, Named IIFE with parameter:- ${parameter}`);
})("chai");// this works as fnc invoker and parameter passer



// 2. UnNamed arrow IIFE with parameter:-
( (name) =>{
    console.log(`hello arrow function ${name}`);
} )("arrow");


