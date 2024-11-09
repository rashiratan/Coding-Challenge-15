import { assets, getAssetById  } from "./asset.js";

export default class transaction {
    //creating class for transactions
constructor(assetId, type, quantity) {
    this.assetId = assetId;
    this.type = type;
    this.quantity = quantity;
}

//create method to update asset quantity
updateAssetQuantity () {
    let foundAsset = getAssetById(this.assetId); //finding asset in portfolio
    if (!foundAsset) {
        throw new Error("Asset not found"); //for asset not found
    }
    if(this.type === "buy") {
        return foundAsset.quantity += this.quantity; //increase the asset quantity
    }
    else if (this.type === "sell") {
        if (foundAsset.quantity < this.quantity) {
            throw new Error("Not enough quantity to sell"); //not enough quantity in store
          }
        return foundAsset.quantity -= this.quantity; //reduce selling quantity from asset
    } else {
        throw new Error("Invalid transaction type. Use 'buy' or 'sell'"); //type not found
    }
}
}