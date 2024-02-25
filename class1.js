class Person{
    constructor(name,age){
        this.name= name ;
        this.age= age ;
    }
    sleep(){
        console.log(`sleeping now ${this.name}
        his age is ${this.age}`)
    }
}
const kodom = new Person('kodom ali',32);
console.log(kodom)
kodom.sleep()