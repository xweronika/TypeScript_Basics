class Sizes {
    constructor(public sizes: string[]) { }

    set availableSizes(sizes: string[]) {
        this.sizes = sizes;
    }
    get availableSizes() {
        return this.sizes;
    }
}

class Pizza extends Sizes {
    public toppings: string[] = [];

    constructor(readonly name: string, public sizes: string[]) { 
        super(sizes);
    }

    public addTopping(topping: string) {
        this.toppings.push(topping);
    }
}

const pizza = new Pizza('Pepperoni', ['small', 'medium']);
pizza.addTopping('pepperoni');

console.log(pizza.name);
