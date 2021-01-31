type Pizza = { name: string, toppings: number };

const pizza: Pizza = { name: 'Blazing Inferno', toppings: 5 };

// JSON.stringify zamienia wszystko na string
const serialized = JSON.stringify(pizza);

function getNameFromJSON(obj: string) {
    return (JSON.parse(obj) as Pizza).name;
}
getNameFromJSON(serialized);
