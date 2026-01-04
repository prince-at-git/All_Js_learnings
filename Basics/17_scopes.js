// scopes:- 1.Global scope  2.Local(block) scope


//nested function to simulate nested scope
function one(){
    let name = "prince";

    function two(){
        let web = "www.google.com";
        console.log(name); // this can access the "name" variable
    }
    // console.log(web);// gives error of not defined - because we cannot access it

    two();
}

// one();




// nested if 

if(true){
    let userName = "prince"
    if(userName === "prince"){
        let userWebsite = "www.google.com";
        console.log(userName); // Executed perfectly
    }
    // console.log(userWebsite);// Error: Not defined -- out of the local scope
}

// console.log(userName);// Error: Not defined



//+++++++++++++++++------------INTERESTING-------------++++++++++++++++++++

//Method_1

console.log(addOne(5)); //No ERROR: part of "Hoisting" concept 
function addOne(num){
    return num + 1;
}


//Method_2

// addTwo(5) // ERROR : Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2;
}

console.log(addTwo(5)); // no error

