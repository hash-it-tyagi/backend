const mongoose = require("../connection");

const Schema = mongoose.Schema;

const productsSchema = new Schema({
    "productName": {type:String, unique:true},
    "productPrice": {type:Number},
    "productDescription": {type:String},
    "productUrl": {type:String},
    "productType": {type:String},
    "productCategory": {type:String}
});

const productsColection = mongoose.model("products",productsSchema);

module.exports = productsColection;