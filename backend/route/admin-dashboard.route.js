const express = require("express");
const route = express.Router();

//Custom Modules:
const adminDashboardOperations = require("../db/models/admin-dashboard.model");

//Get Product Category:
route.get("/getProductCategory",(req,res)=>{
    var decision = req.query.bool;
    if(decision == "true"){
        adminDashboardOperations.getProductCategory().then(data=>{
            if(data == null){
                res.json({"status":404});
            }
            else{
                let coffeeIndex = data.findIndex(ele=> ele.categoryName == "Coffees");
                data.splice(coffeeIndex,1);
                let cakeIndex = data.findIndex(ele=> ele.categoryName == "Cakes");
                data.splice(cakeIndex,1);
        
                res.json({"status":200,"categories":data});
            }
        }).catch(err=>res.json({"status":503}));
    }
    else{
        adminDashboardOperations.getProductCategory().then(data=>{
            if(data == null){
                res.json({"status":404});
            }
            else{
                let coffeeIndex = data.findIndex(ele=> ele.categoryName == "Coffees");
                let cakeIndex = data.findIndex(ele=> ele.categoryName == "Cakes");
                let bakery = data.splice(coffeeIndex,cakeIndex);
        
                res.json({"status":200,"categories":bakery});
            }
        }).catch(err=>res.json({"status":503}));
    }
});

module.exports = route;