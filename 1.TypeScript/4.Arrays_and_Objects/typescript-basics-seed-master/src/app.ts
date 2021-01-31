const pizza = {
    name: 'Pepperoni',
    toppings: ['pepperoni'],
};

function order1(pizza) {
    console.log(pizza);
}
// order1(pizza);
// output: { name: 'Pepperoni', toppings: [ 'pepperoni' ] }

function order2({ name, toppings }) {
    console.log(name, toppings);
};
// order2(pizza);
// output: Pepperoni [ 'pepperoni' ]

function order3({ name: pizzaName, toppings: pizzaToppings }) {
    console.log(pizzaName, pizzaToppings);
}
// order(pizza);
// output: Pepperoni [ 'pepperoni' ]

function order({ name: pizzaName, toppings: pizzaToppings }) {
    return { pizzaName, pizzaToppings }
}
const { pizzaName } = order(pizza);
// to dziala na tej samej zasadzie co:
// import {upercase} from './utils';

const toppings = ['pepperoni', 'bacon', 'chilli'];
const [first, second, third] = toppings;
// wpisujemy warosci skladnikow pizzy do zmiennych first, ... 

// console.log(first, second, third);
// output: pepperoni bacon chilli

function logToppings([first, second, third]: any) {
    console.log(first, second, third);
}

logToppings(toppings);
// output: pepperoni bacon chilli


const a = "aa";
const b = a;
console.log(b); // output: aa
