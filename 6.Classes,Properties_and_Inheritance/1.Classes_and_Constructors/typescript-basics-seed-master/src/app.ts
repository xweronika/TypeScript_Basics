class Pizza {
    name: string;
    toppings: string[] = [];

    constructor(name: string) {
        this.name = name;
    }
    
    addTopping(topping: string) {
        this.toppings.push(topping);
    }
}

// function Pizza(name: string) {
//     this.name = name;
//     this.toppings = [];
// }

// Pizza.prototype.addTopping = function addTopping(topping: string) {
//     this.toppings.push(topping);
// };

const pizza = new Pizza('Pepperoni');
pizza.addTopping('pepperoni');

console.log(pizza);
// output:
// { toppings: [ 'pepperoni' ], name: 'Pepperoni' }

// jest w odwrotnej kolejnosci poniewaz toppings mialo zadeklarowana pusta
// wartosc, gdybysmy wpisali jakas wartosc do name, to name byloby pierwsze