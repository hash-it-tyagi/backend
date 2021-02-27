const productsCollection = require("../schemas/products-schema");

const productOperations = {
    async add(productObject){
        return await productsCollection.create(productObject);
    },
    async update(productObject){
        return await productsCollection.findOneAndUpdate({"productName":productObject.productName},productObject);
    },
    async delete(productObject){
        return await productsCollection.findOneAndDelete(productObject);
    },
    async search(productObject){
        return await productsCollection.findOne(productObject);
    },
};

module.exports = productOperations;