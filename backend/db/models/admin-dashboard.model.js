const productCategoryCollection = require("../schemas/product-category.schema");

const adminDashboardOperations = {
    async getProductCategory(){
        return await productCategoryCollection.find({});
    }
};

module.exports = adminDashboardOperations;