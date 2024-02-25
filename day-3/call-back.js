function primatyname(functionName, name, age){
    return functionName(name, age);
}

function fullName (name,age){
    return `hello iam ${name} . iam ${age} years old`
} 

const result = primatyname(fullName , 'ariful', 21);
console.log(result)