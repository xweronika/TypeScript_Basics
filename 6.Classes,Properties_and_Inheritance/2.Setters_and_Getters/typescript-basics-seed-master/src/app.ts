class Sizes {
    constructor(public sizes: string[]) { }

    set availableSizes(sizes: string[]) {
        this.sizes = sizes;
    }
    get availableSizes() {
        return this.sizes;
    }
}

const sizes = new Sizes(['small', 'medium']);

// odwolanie do gettera
console.log(sizes.availableSizes);
// output: [ 'small', 'medium' ]

// odwolanie do settera
sizes.availableSizes = ['medium', 'large'];

console.log(sizes.availableSizes);
// output: [ 'medium', 'large' ]



