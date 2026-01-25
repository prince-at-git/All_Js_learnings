

let user = {
    userName: "Prince",
    price: 999,

    welcomeMsg: function(){
        console.log(`hi, ${user.userName}, welcome to the website your current balance is ${user.price}`);
        console.log(user);
        console.log(this);
        
    }
}

user.welcomeMsg();

console.log(this);


