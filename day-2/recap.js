const a = 56 ;
const number = [32,53];
const person = {
    name: "shakib khan",
}
const message = `hi, iam ${person.name} 
    my amount is ${a}
    i am access to ${number[1]}`;
    // console.log(message);

const {age,z , ...others} = {x:2, y:5, z:3, name:'ovijit', age:55};

// console.log(others)

const [frist, secound,...remenning] = ['jodu','modu','kodu'];
// console.log(remenning)


const data = [{id:1, name:'abul', address:'dhaka'}];
// console.log(data[0].name)

const products ={
    count : 6000,
    data: [
        {id:1, name: 'lenevo', price: 65},
        {id:2, name: 'samsung', price: 50},
        {id:3, name: 'hp', price: 262200},
        {id:4, name: 'mac', price: 6564556},
    ]
}
// console.log(products.data[1].name)