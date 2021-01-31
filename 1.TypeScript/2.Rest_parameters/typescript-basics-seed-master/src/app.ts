const pizza = {
    name: 'Pepperoni',
    price: 15,
    getName: function () {
        return this.name;
    }
};

console.log(pizza.getName());

const toppings = ['pepperoni'];

// const order = { pizza, toppings }
//  inaczej: { pizza: pizza, 
//             toppings: toppings }

function createOrder(pizza, toppings) {
    return { pizza, toppings };
}

console.log(createOrder(pizza, toppings));

// output:
// Pepperoni
// {
//   pizza: { name: 'Pepperoni', price: 15, getName: [Function: getName] },
//   toppings: [ 'pepperoni' ]
// }
//________________________________________________________________

function sumAll(arr) {
    return arr.reduce((prev, next) => prev + next);
}
const sum = sumAll([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(sum);
// output: 55

// ***********************************************************

function sumAll1(message, ...arr) {
    // zamiast okreslac liczbe argumentow np. (arg1, arg2, arg3 ... arg10)
    // to uzywamy '...' i dzieki temu nie musimy okreslac liczby obiektow

    console.log(arguments);
    // zobaczymi wszystkie argumenty np '0': 'Hello!', ... itd
    // console.log(arguments[0]); 

    console.log(message);
    return arr.reduce((prev, next) => prev + next);
}
const sum1 = sumAll1('Hello!', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(sum);
// output:
// [Arguments] {
//'0': 'Hello!', '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,'10': 10 }
// Hello!
// 55

