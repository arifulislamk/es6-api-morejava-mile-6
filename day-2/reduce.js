const numbers = [ 4, 5, 7,8] ;

const total = numbers.reduce((previous,current) => previous +current, 0);
// console.log(total);

const total1 = numbers.reduce((p,c) => p+c , 2);
// console.log(total1)