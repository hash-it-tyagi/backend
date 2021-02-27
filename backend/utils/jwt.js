const jwt = require("jsonwebtoken");

const jwtOperations = {
    SECRETKEY:"AMACAFE",
    generateToken(username){
        var token = jwt.sign({"userId":username},this.SECRETKEY,{expiresIn:"1h"});
        return token;
    },
    verifyToken(token){
        var decoded = jwt.verify(token,this.SECRETKEY);
        if(decoded){
            return true;
        }
        else{
            return false;
        }
    }
};

module.exports = jwtOperations;