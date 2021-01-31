const pizzas = [
    { name: 'Pepperoni', toppings: ['pepperoni'] }
];
// pizzas.map(function(pizza) {
const mappedPizzas = pizzas.map(pizza => pizza.name.toUpperCase());
// inaczej: return pizza.name.toUpperCase();  });

console.log(mappedPizzas);

const pizza = {
    name: 'Blazing Inferno',
    getName: () => pizza.name,
    // w funkcji: console.log(this); 
    // referencja do calego obiektu pizzy

};
console.log(pizza.getName());


// output:
// [ 'PEPPERONI' ]
// Blazing Inferno

//_____________________________________________

function multiply(a, b = 25) {
    return a * b;
}

console.log(multiply(5));
console.log(multiply(5, 35));

// output:
// 125
// 175
