class Vehicle{
    country = 'bangladesh'
    constructor(name, price){
        this.name = name ;
        this.price = price ;
    }
    move(){
        console.log('gari chole na chole na cholena re');
    }
}

class Bus extends Vehicle{
    constructor( name, price, seat , ticketprice){
        super(name,price)
        this.seat = seat ;
        this.ticketprice = ticketprice ;
    }
}
const ena = new Bus('Ena',4000,120, 400);
console.log(ena)