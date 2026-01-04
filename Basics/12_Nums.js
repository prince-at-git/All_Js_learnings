

// const score = 400;
// const balance = new Number(100);//kind of like type casting 
// console.log(score , balance ); //op-> 400 [Number: 100]
// const balanceStr = balance.toString()
// console.log(balanceStr, typeof(balanceStr), typeof(balance));


//Locale Strings


// const money = 10000000;

// const localeStr = money.toLocaleString();// international system {milions/bilions}
// const localeStr_Ind = money.toLocaleString('en-IN');// Indian system {Lakhs/coroes}

// console.table([money, localeStr, localeStr_Ind]);


// ++++++++++----------MATHS---------+++++++++++++++++++++
// var nums = 3.14159265359;
// console.log(nums);

// console.log(Math.round(nums));
// console.log(Math.ceil(nums));
// console.log(Math.floor(nums));

// console.log(Math.max(2,8.4,9,1,7,12,57,63,91));
// console.log(Math.min(2,8.4,9,1,7,12,57,63,91));


// var rand = Math.random()*10 + 1

// console.log(Math.floor(rand));

//Random value between two numberss:-

const min_value = 10 ;
const max_value = 20 ;

const value = Math.random() * (max_value - min_value + 1) + min_value;

console.log(Math.floor(value));


