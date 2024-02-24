const numbers = [2, 34, 5445, 645,33, 38888];
let max = numbers[0] ;
for(const num of numbers){
    if(num > max){
        max = num ;
    }
}
// console.log(max);
// console.log(...numbers)
const arraymax = Math.max(...numbers);
// console.log(arraymax) 

const num2 = [ 3,34,54];
const s=num2
const num3 = s;
num3.push(3,32,34);
// console.log(s);
const nums4 = [...num2,10];
console.log(nums4)
