// arrow function
const add3 = (a, b, c) => a + b + c;
const add = add3(3, 4, 2);
// console.log(add)

const doubleIt = num => num * num;
// console.log(doubleIt(8));

const getPI = () => Math.PI;
// console.log(getPI());

const addd = (a, b, c, d) => {
    const sum = a + b + c + d;
    const mult = a * b;
    return sum / mult ;
}
// console.log(addd(1,3,4,1))
