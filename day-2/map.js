// general system 
const numbers = [4, 5, 10, 20, 9];
const doubleed = [];
for (const num of numbers){
    const double = num *2 ;
    doubleed.push(double);
}
// console.log(doubleed)

// use map1 system
function double(num){
    return num * 2 ;
}
const result = numbers.map(double);
// console.log(result)

// use map2 system 
const double1 = num => num *2 ;
const result1 = numbers.map(double1);
// console.log(result1)



// use map3 or final system 
const result2 = numbers.map(num => num *2);
// console.log(result2);
// reagain last one 
const numbers1 = [ 2,453,3,42,];
const result3 = numbers1.map(num => num * 2);
// console.log(result3)

// more example 

const fivebonus = numbers1.map( n => n+5);
// console.log(fivebonus)

const half = numbers1.map( n => n /2);
// console.log(half);

const friends = ['shakib', 'ariful', 'merazul','shuvo','rokib'];
const length = friends.map(len => len.length);
// console.log(length)
const fristLetter = friends.map(friend => friend[0]);
// console.log(fristLetter)

