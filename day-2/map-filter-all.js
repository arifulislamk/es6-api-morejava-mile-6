const products = [
    { id:1, name:'lenevo', price: 5000},
    { id:2, name:'hp', price: 85000},
    { id:3, name:'dell', price: 45000},
    { id:4, name:'mac', price: 105000},
]

const names = products.map(pro => pro.name);
// console.log(names)
const price = products.map(pro => pro.price);
// console.log(price)

// products.forEach(pro => console.log(pro.id))
// products.forEach(pro => console.log(pro.name))

const expensive = products.filter(pro => pro.price > 80000);
// console.log(expensive)
const affortable = products.filter(pro => pro.price< 50000);
// console.log(affortable);

const comfortable = products.filter(pro => pro.price< 50000);
// console.log(comfortable)

const total = products.reduce((p,c) => p+c.price , 0);
// console.log(total)