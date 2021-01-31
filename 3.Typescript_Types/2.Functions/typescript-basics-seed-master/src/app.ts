// NULL
let coupon: string | null = 'pizza25';
// | - or

function removeCoupon(): void {
    coupon = null;
}

// console.log(coupon);
removeCoupon();
// console.log(coupon);
// output:
// pizza25
// null

// Union types

let pizzaSize: string = 'small';

function selectSize(size: 'small' | 'medium' | 'large'): void {
    pizzaSize = size;
}

selectSize('large');
//console.log(`Pizza size: ${pizzaSize}`);
// output: Pizza size: large

// ************************************************** 

function sumOrder(price: number, quantity: number): number {
    return price * quantity;
}

// let sumOrder1; lub:
// let sumOrder1: Function; lub:
let sumOrder1: (price: number, quantity: number) => number;
sumOrder1 = (price: number, quantity: number): number => {
    return price * quantity;
}


let sumOrder2: (price: number, quantity: number) => number;
sumOrder2 = (x, y) => x * y;


let sumOrder3: (price: number, quantity: number) => number = (x, y) => x * y;

// const sum = sumOrder2(25, 2);
// console.log(`Total sum: ${sum}`);
// output: Total sum: 50


// ************************************************** 
// Optional arguments

let sumOrder4: (price: number, quantity?: number) => number;
// nazwa? - argument opcjonalny
sumOrder4 = (x, y) => {
    if (y) {
        return x * y
    }
    return x;
};

// const sum = sumOrder4(25);
// console.log(`Total sum: ${sum}`);
// output: Total sum: 25

// ************************************************** 


let sumOrder5: (price: number, quantity?: number) => number;
sumOrder4 = (x, y = 1) => x * y
// ustawia y domyslnie na 1 jesli y jest undefine

const sum = sumOrder4(25);
console.log(`Total sum: ${sum}`);
// output: Total sum: 25

const sum1 = sumOrder4(25, 2);
console.log(`Total sum: ${sum1}`);
// Total sum: 50