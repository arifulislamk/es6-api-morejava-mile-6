const glass = {
    name: 'glass',
    color: 'golden',
    price: 12,
    isClead : true,
}

for(const key in glass){
    // console.log(glass[key])
}

// or 

const keys = Object.keys(glass);
for(const key of keys){
    console.log(key,glass[key])
}