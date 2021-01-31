let pizza: { name: string; price: number; getName(): string } = {
    name: 'Plain Old Pepperoni',
    price: 20,
    getName() {
        return pizza.name;
    },
};

console.log(pizza.getName());

// #############################

let sizes: number[];
sizes = [1, 2, 3];

let toppings: string[];
toppings = ['pepperoni', 'tomato', 'bacon'];

// inny sposob na tablice:
let pizzas: Array<string>;
pizzas = ['Pepproni', 'Inferno', 'Havaiian'];

// #############################

let orders: [string, number, boolean];
// pierwszy argument to string, drugi num, trzeci bool

orders = ['Pepperoni', 20, true];