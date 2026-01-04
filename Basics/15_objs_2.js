/*key-points*
 1. Nested objs 
 2. Addition of objs by (OBJ Assignment) & (Spread operator)
 3. Array of OBJs
 4. get all the OBJ's Key(s) and use it => "Object.keys(nameOfTheObj)"// returns an array of the key(s)
 5. for value(s) do the above just replace keys with values
*/


//* 1. Literal v/s Constructor*

let facebook_user = {};// literal way of OBJ declaration
let insta_user  = new Object();// constructor way of declaring OBJs
// console.log(facebook_user, insta_user);// op-> {} {}

insta_user.id = "123abc"
insta_user.name = "xyz"
insta_user.isLoggedIn = false

// console.log(insta_user); //{ id: '123abc', name: 'xyz', isLoggedIn: false }

 
//* 2. Nested Objects:-

var regular_user = {
    email: "some@gmail.com",
    name: {
        userFullName:{
            firstName:"Prince",
            lastName:"soni"
        }
    }
}
// // accessing of these nested OBJs
// console.log(regular_user.name.userFullName.firstName);//op-> Prince



//* 3. ADDITION OF OBJs

// 3.1 OBJ Assignment or joing of Two or more Objs

var obj_1 = {1:"a", 2:"b", 3:"c"};
var obj_2 = {4:"a", 5:"b", 6:"c"};

/*READ THIS:-*
    Object.assign(target)
    Object.assign(target, source1)
    Object.assign(target, source1, source2)
    Object.assign(target, source1, source2,......,sourceN)

    that's why instead of:

        Object.assign(obj_1,obj_2); 

    we use "{}"

        Object.assign({}, obj_1, obj_2);
        
    meaning // obj_1 + obj_2 => {} i.e.. it goes to an empty object
    
*/

var obj_3 = Object.assign({},obj_1,obj_2); 
// console.log(obj_3);


// 3.1 Or use Spread operator (...)

var obj_4 = {...obj_1,...obj_2}
// console.log(obj_4);



//* 4. Array Of OBJs

const user_data =[
    {
        id: 1,
        email: "some@gmail.com"
    },
    {
        id: 2,
        email: "something@gmail.com"
    },
    {
        id: 3,
        email: "someone@gmail.com"
    },
]

// console.log(user_data[1]);
// console.log(user_data[1].id);

//+++++++++++++++++++++++++------Print the "key(s)" & "value(s)" of an Obj separetaly in an array:-------------+++++++++++++++++++++++++++++++++++++++++++++++++

var me_data = {
    id : "sdbaf",
    name: "lol",
    class: "B",
    Status: "working"
}

var keys = Object.keys(me_data);
var vals = Object.values(me_data);

console.log(keys); //[ 'id', 'name', 'class', 'Status' ]
console.log(vals);//[ 'sdbaf', 'lol', 'B', 'working' ]








