class Coupon {
    static allowed = ['Pepperoni', 'Blazing Inferno'];
    // static nie mozna edytowac
    // jest to uzyteczne przy roznych 
    // gotowych bibliotekach itd z ktorych
    // tylko korzystamy

    static create(percentage: number) {
        return `PIZZA_RESTAURANT_${percentage}`;
    }
}

console.log(Coupon.allowed);
// output: [ 'Pepperoni', 'Blazing Inferno' ]

console.log(Coupon.create(25));
// output: PIZZA_RESTAURANT_25