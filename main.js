//importing all modules
import {calculatePortfolioValue, getPortfolioAllocation} from "./portfolio.js";
import transaction from "./transaction.js";
import {assets} from "./asset.js"

const portfolioDetails = document.getElementById("portfolioDetails");
//display portfolio value
const PortfolioValue = document.createElement("p");
PortfolioValue.textContent = `The Portfolio Value right now is: $${calculatePortfolioValue()}`;
console.log(PortfolioValue.textContent);

portfolioDetails.appendChild(PortfolioValue);

//display portfolio allocation
const AllocationInfo = document.createElement("ul");

const PortfolioAllocation = getPortfolioAllocation();

PortfolioAllocation.forEach((item, index) =>{
    console.log(`Asset ID: ${assets[index].id}, Asset Name: ${assets[index].name}, Asset Allocation: ${item}%`);
    const ListItem = document.createElement("li");
    ListItem.textContent= `Asset ID: ${assets[index].id}, Asset Name: ${assets[index].name}, Asset Allocation: ${item}%`;
    AllocationInfo.appendChild(ListItem);
})

portfolioDetails.appendChild(AllocationInfo);

//create transactions
const transactions = [
    new transaction(1, "buy", 10),
    new transaction(2, "sell", 5),
    new transaction(3, "buy", 20)
];

const TransactionDetails = document.createElement("div");

//display transaction details
transactions.forEach((trans) =>
{
    console.log( `Transaction ID: ${trans.assetId}, Transaction Type: ${trans.type}, Quantity: ${trans.quantity}`);
    const TransactionInfo = document.createElement("p");
    TransactionInfo.textContent = `Transaction ID: ${trans.assetId}, Transaction Type: ${trans.type}, Quantity: ${trans.quantity}`;
    TransactionDetails.appendChild(TransactionInfo);
    trans.updateAssetQuantity();
})

//display updated portfolio details post transactions
const UpdatedPortfolioDetails = document.createElement("div");
const UpdatedPortfolioValue = document.createElement("p");
UpdatedPortfolioValue.textContent = `The Portfolio Value right now is: $${calculatePortfolioValue()}`;
console.log(UpdatedPortfolioValue.textContent);

UpdatedPortfolioDetails.appendChild(UpdatedPortfolioValue);
portfolioDetails.appendChild(TransactionDetails);
portfolioDetails.appendChild(UpdatedPortfolioDetails);

