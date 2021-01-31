// NUMBER
const pizzaCost: number = 10;
const pizzaToppings: number = 2;

function calculatePrice(cost: number, number: number): number {
    return cost + 1.5 * pizzaToppings;
}

const cost: number = calculatePrice(pizzaCost, pizzaToppings);
// console.log(`Pizza costs: ${cost}`);
// output: Pizza costs: 13

//_______________________________________________________
//STRING

const coupon: string = 'pizza25';
function normalizeCoupon(code: string): string {
    return code.toUpperCase();
}

const couponMessage: string = `Final coupon is ${normalizeCoupon(coupon)}`;
// console.log(couponMessage);
//output: Final coupon is PIZZA25

//_______________________________________________________
//BOOLEAN

const pizzas: number = 5;

function offerDiscount(orders: number): boolean {
    return orders >= 3;
    // jesli jest wiecej niz 3 zamowienia to zwraca true
}
if (offerDiscount(pizzas)) {
    console.log(`You're entitled to a discount!`);
} else {
    console.log(`Order more than 3 pizzas for a discount!`);
}