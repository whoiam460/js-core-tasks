const POTATO = {type: 'kartoshka', price:'15', cal:'10'}
const SALAD = {type: 'salat', price:'20',  cal:'5'}
const CHEESE = {type: 'sur',prise:'10', cal:'20' }
const MAYONES = {type:'mayones', prise:'20',cal:'5'}
const PRUPRAVA = {type: 'pruprava', prise:' 15',cal:'0'}

class Hamburger{
    constructor(type,price,cal){
             this.type = type;
             this.price = price;
             this.cal = cal;
    }

    size(){
        return `${this.type} ${this.price}-tygruk ${this.cal}-caloriy`
    }
}

const BigHamburger = new Hamburger('Big Hamburger', 100, 40, );
const SmallHamburger = new Hamburger('Small Hamburger', 50, 20, );


console.log(BigHamburger.size());


const calories =(...props) =>{
let sum =0;
props.map(item => sum += +item.cal)
return sum;
}

const price = (...props) => {
    let sum =0
    props.map(item => sum += +item.cal)
    return sum;
}

console.log(calories(BigHamburger, POTATO, CHEESE,MAYONES));