//arrow function in js is the new way of function declaration
// this remembers the context inside the scope/ block it's in.

const user = {
    userName : "Prince",
    price: 999,

    welcomeMsg : function(){
        console.log(`Hi, ${this.userName}, welcome to the website.`);
        console.log(this);
    }
}

// user.welcomeMsg()
// user.userName = "sam";
// user.welcomeMsg()

// console.log(user);


// this in fucntion -----interesting 

function chai(){
    let userName = "prince"
    console.log(this.userName);
}

// chai();


// --------------------------------------------ARROW function-------------------------------------------------------------------------------------------------

/*Syntax*
 1.  () => expression

 2. () => {
      "statements"
      return // it's needed in curely braces
    }
 3. () => () // implicite arrow fnc
*/

// simple arrow functions gets rid of the "function" word

const addTwo = (num_1, num_2) => { // curly braces toh -> return is needed
    return num_1 + num_2;
}

console.log(addTwo(2,4));

// implicit return arrow function

const add_2 = (n_1, n_2) => (n_1 + n_2) ; // parentesses toh -> no return
console.log(add_2(3,5));



