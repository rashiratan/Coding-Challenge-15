//task 1
//creating assets array
export const assets = [
    {id: 1, name: 'TechCorp Stock', type: 'stock', price: 150, quantity: 50},
    {id: 2, name: 'Meta Stock', type: 'stock', price: 300, quantity: 40},
    {id: 3, name: 'Apple Stock', type: 'stock', price: 200, quantity: 35},
    {id: 4, name: 'Microsoft Stock', type: 'stock', price: 400, quantity: 67},
    {id: 5, name: 'Unilever Stock', type: 'stock', price: 100, quantity: 34},
    {id: 6, name: 'IBM Stock', type: 'stock', price: 145, quantity: 89},
    {id: 7, name: 'TD Stock', type: 'stock', price: 178, quantity: 54},
    {id: 8, name: 'Games Stock', type: 'stock', price: 234, quantity: 23}
];

//create function
export function getAssetById(id) {
    return assets.find(asset => asset.id === id);
}