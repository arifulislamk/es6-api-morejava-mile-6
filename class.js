class Products {
    country = 'bangladesh';
    constructor (name, price, id){
        this.name = name ;
        this.price = price;
        this.id = id;
    }
    speak(talk){
        console.log(`taking about ${talk}`)
    }
}
const lenevo = new Products ('le le lenovo',85000);
const mac = new Products('lele mac')
// console.log(lenevo);
// console.log(mac);
// lenevo.speak('oba kita kow')

class Teacher{
    school = 'moulovir Char';
    student = 1200;
    constructor(name,subject){
        this.name = name ;
        this.subject =subject ;
    }
    leture(){
        console.log('sir is teaching Math');
    }
}
const topan = new Teacher('topan sir','physices');
// console.log(topan);
const rashid = new Teacher('Rashid sir', 'English');
// console.log(rashid)
// rashid.leture()