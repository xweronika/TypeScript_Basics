// Aliases - skroty

let pizzaSize: 'small' | 'medium' | 'large' = 'small';
// domyslna wartosc to small

const selectSize = (size: 'small' | 'medium' | 'large') => {
    pizzaSize = size;
};

selectSize('small');

// To samo inczej:

type Size = 'small' | 'medium' | 'large';
let pizzaSize1: Size = 'small';

const selectSize1 = (size: Size) => {
    pizzaSize1 = size;
};

selectSize1('small');


// To samo tez inczej:

type Size2 = 'small' | 'medium' | 'large';
type Callback = (size: Size2) => void;

let pizzaSize2: Size2 = 'small';

const selectSize2: Callback = (x) => {
    pizzaSize2 = x;
};

selectSize2('medium');