const mongoose = require("../connection");

const Schema = mongoose.Schema;

const adminSchema = new Schema({
    "username": {type:String, unique:true, required:true},
    "password": {type:String, required:true},
    "token":{type:String}
});

const adminCollection = mongoose.model("admins",adminSchema);

module.exports = adminCollection;