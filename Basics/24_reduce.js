/*Key points*


*/

// reduce method's syntax

const array = [1, 2, 3, 4];
let initialVal = 0;

const total = array.reduce((accu, currVal)=>{
    // console.log(`accu value:${accu} and CurrVal ${currVal}`);
    return accu + currVal;
},initialVal)

// console.log(total);



// reduce use case / in objects:-

const shoppingCart=[ // goal:- to add all item's prices 
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "Python",
        price: 999
    },
    {
        itemName: "Mobile course",
        price: 5999
    },
    {
        itemName: "full stack course",
        price: 6999
    }
];

// let totalPrice = shoppingCart.reduce((acc,item)=>{
//     return acc + item.price;
// },0);

//different way to use reduce

let priceToPat = shoppingCart.reduce((acc,item)=> acc + item.price); // no need to write return here as we are not using "{}" curly braces

console.log(totalPrice);


