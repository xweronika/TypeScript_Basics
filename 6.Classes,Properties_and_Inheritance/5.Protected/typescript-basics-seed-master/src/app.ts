abstract class Sizes {
    constructor(protected sizes: string[]) { }
    // protected dziala tak jak private, z taka roznica
    // ze klasa ktora dziedziczy po tej klasie (extends)
    // ma do tej zmiennej pelny dostep
    // czyli sizes na zewnatrz jest prywatne, 
    // ale klasa Pizza ma do niej pelny dostep,
    // bo dziedziczy po klasie Sizes

    set availableSizes(sizes: string[]) {
        this.sizes = sizes;
    }
    get availableSizes() {
        return this.sizes;
    }
}

class Pizza extends Sizes {
    public toppings: string[] = [];

    constructor(readonly name: string, sizes: string[]) {
        super(sizes);
    }

    public updateSizes(sizes: string[]) {
        this.sizes = sizes;
        // tutaj odnosimy sie do zmiennej sizes
        // ktora jest protected, ale ta funkcja 
        // zawiera sie w klasie Pizza ktora
        // dziedziczy po klasie Sizes
    }

    public addTopping(topping: string) {
        this.toppings.push(topping);
    }
}

const pizza = new Pizza('Pepperoni', ['small', 'medium']);

// setter do wyswietlania
console.log(pizza.availableSizes);
// output:
// [ 'small', 'medium' ]

pizza.updateSizes(['large']);

console.log(pizza.availableSizes);
// output:
// [ 'large' ]