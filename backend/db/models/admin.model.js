const adminCollection = require("../schemas/admin.schema");

const adminOperations = {
    async searchAdmin(adminObject){
        return await adminCollection.findOne(adminObject);
    },
    async addToken(adminObject,token){
        return await adminCollection.findOneAndUpdate({"username":adminObject.username},{"token":token});
    }
};

module.exports = adminOperations;