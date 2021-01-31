let coupon: any;
coupon = 25;
coupon = '25';
coupon = true;


let implicitCoupon = 'pizza25'; // domniemany
let explicitCoupon: string = 'pizza25'; // wyrazny

//###################################

let selectedTopping: string = 'pepperoni';

function selectTopping(topping: string): void {
    // jest to funkcja typu void
    selectedTopping = topping;
}

selectTopping('bacon');
console.log(selectedTopping);
// output: bacon

//###################################

function orderError(error: string): never {
    throw new Error(error);
    // never going to return a value!
}
orderError('Something went wrong');
