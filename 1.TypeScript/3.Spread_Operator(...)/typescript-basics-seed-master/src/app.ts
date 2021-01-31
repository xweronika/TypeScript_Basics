const oldToppings = ['bacon', 'chilli'];
const newToppings = ['pepperoni'];
const allToppings = [...oldToppings, ...newToppings];
console.log(allToppings);
// output: [ 'bacon', 'chilli', 'pepperoni' ]
// gdyby nie ... to powstalaby tablica z 2 podtablicami wewnatrz

//_____________________________________________________

const pizza = {
    name: 'Pepperoni',
};
const toppings = ['pepperoni'];

const order = {
    ...pizza,
    toppings,
};

console.log(order);
// output:
// { name: 'Pepperoni', toppings: [ 'pepperoni' ] }

const finalOrder = { ...order };
console.log(finalOrder);
// output:
// { name: 'Pepperoni', toppings: [ 'pepperoni' ] }
