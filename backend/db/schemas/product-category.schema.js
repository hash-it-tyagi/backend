const mongoose = require("../connection");

const Schema = mongoose.Schema;

const productCategorySchema = new Schema({
    "categoryName": {type:String, unique:true, required:true}
});

const productCategoryCollection = mongoose.model("categories",productCategorySchema);

module.exports = productCategoryCollection;