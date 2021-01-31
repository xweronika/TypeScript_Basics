abstract class Sizes {
    // klasa abstrakcyjna
    constructor(public sizes: string[]) { }

    set availableSizes(sizes: string[]) {
        this.sizes = sizes;
    }
    get availableSizes() {
        return this.sizes;
    }
}
// new Sizes(['small]);
// Klasy abstrakcyjnej nie mozna wywolac!

// Klasy abstrakcyjnej uzywamy wtedy gdy nie 
// chcemy sie do niej nigdzie odwolywac, tylko
// tylko ja dziedziczyc w innej klasie za pomoca
// extends, jak w tym przypadku

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
