const oddNumbers = [1, 3, 5, 7, 9];
const evenNumber = [];
for (const odd of oddNumbers) {
    const even = odd + 1;
    evenNumber.push(even);
}
// console.log(evenNumber)
// using map 
const evenNum = oddNumbers.map(num => num + 1);
// console.log(evenNum)


// task2
const numbers1 = [33, 50, 64, 60, 90, 43];
const divisalby10 = numbers1.filter(num => num % 10 === 0);
// console.log(divisalby10);
const divisalby1 = numbers1.find(num => num % 10 === 0);
// console.log(divisalby1)



// task 3
const instructor = [
    {name:'akil', age:28, positon:'senior'},
    {name:'shakil', age:24, positon:'junior'},
    {name:'nodi', age:25, positon:'senior'},
    {name:'rahat', age:26, positon:'senior'},
]
const seniorPositio = instructor.filter(instruc => instruc.positon==='junior');
// console.log(seniorPositio)
// console.log(seniorPositio[0].name)

// task 4
const peoples = [
    {name: 'mena', age: 20},
    {name: 'rina', age: 15},
    {name: 'suchorita', age: 22},
]

// let sum = 0 ;
// for(const people of peoples){
//     sum = sum + people.age ;
// }
// console.log(sum)

const total = peoples.reduce((accu,current) => accu+ current.age, 0);
console.log(total)