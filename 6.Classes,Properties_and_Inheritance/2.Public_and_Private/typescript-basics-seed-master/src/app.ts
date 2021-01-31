class Pizza {
    public toppings: string[] = [];

    constructor(readonly name: string) { }
    // jesli nie chcemy dawac publicznego dostepu
    // a chcemy zeby ta wartosc mogla byc wyswietlana

    // gdyby bylo pobliczne to moglibysmy zmienic jej wartosc
    // a przy readonly nie mozemy

    public addTopping(topping: string) {
        this.toppings.push(topping);
    }
}

const pizza = new Pizza('Pepperoni');
pizza.addTopping('pepperoni');

console.log(pizza.name);
// output: Pepperoni
