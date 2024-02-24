const user = {
    name : 'ariful islam khan',
    phones :  1727256612,
    age: 25 ,
}
const keys = Object.keys(user);
const values = Object.values(user);
const entries = Object.entries(user);

// console.log(keys)
// console.log(values)
// console.log(entries)

// delete system 

delete user.age  ;
const {age,name,...userrest} = user ;
// console.log(userrest)

// Object.freeze(user);
// delete user.name  ;

Object.seal(user)
user.name = 'khan' ;
user.behave = 'good'
console.log(user)