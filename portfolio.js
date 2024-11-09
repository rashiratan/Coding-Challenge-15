//task 2
//importing assets from asset.js
import { assets } from "./asset.js";

export function calculatePortfolioValue() {
    //using reduce method to calculate value
    return assets.reduce((total, asset) => total + asset.price*asset.quantity, 0);
}

export function getPortfolioAllocation() {
    const PortfolioValue=calculatePortfolioValue();
    //using map to create array with portfolio allocations
    return assets.map(asset => ((asset.quantity*asset.price)*100/PortfolioValue).toFixed(2));
}