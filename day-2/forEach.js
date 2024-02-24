// same as map but 1 things  is different 
// it was forEach function can not return any things

const numbers = [2,34,54434,43,54];
const result = numbers.forEach(n => console.log(n))
const result1 = numbers.forEach(n => n*2);
// console.log(result1)         no return for forEach

