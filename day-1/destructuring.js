const numbers = [3,54,53];
const [a,b, c] = numbers ;
// console.log(a, b, c)
const [x,y] = [34,5];
// console.log(x,y)

function doubleIt(a,b){
    return [a*a , b*b];
}
const [adddd,ddd] = doubleIt(3,5);
// console.log(adddd, ddd)


const person = {
    name : 'ariful',
    age: 21,
    profession: 'student',
    isSalary : true ,
}

// console.log(person['name'])
// console.log(person.age)
const { name, age:boyos, profession, isSalary} = person ;
const { name:kiname} = person ;
// console.log(name,boyos,profession,isSalary)
// console.log(kiname)

