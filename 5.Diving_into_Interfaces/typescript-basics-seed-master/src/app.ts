// type Pizza = {
//     name: string;
//     sizes: string[]
// };

interface Sizes {
    sizes: string[];
}

interface Pizza extends Sizes {
    // dziedzicz, rozszerz o interfejs Sizes
    name: string;
    toppings?: number;
    getAvailableSizes(): void;
    [key: number]: string; // w ramach ID
};

type getAvailableSizes = () => void;

let pizza: Pizza;

function createPizza(name: string, sizes: string[]) { // : Pizza } lub as Pizza
    return {
        name,
        sizes,
        getAvailableSizes() {
            return this.sizes;
        }
    } as Pizza;
}
pizza = createPizza('Pepperoni', ['small', 'medium']);
pizza[1] = 'xyz';
pizza.toppings = 1;
