const express = require("express");
const route = express.Router();

//Custom Modules:
const productOperations = require("../db/models/products.model");

//Add Product:
route.post("/addProduct",(req,res)=>{
    var productObject = req.body.data;

    productOperations.add(productObject).then(data=>res.json({"status":200})).catch(err=>res.json({"status":404}));
});

//Update Products:
route.post("/updateProduct",(req,res)=>{
    var productObject = req.body.data;

    productOperations.update(productObject).then(data=>{
        if(data == null){
            res.json({"status":404});
        }
        else{
            res.json({"status":200});
        }
    }).catch(err=>res.json({"status":503}));
});

//Delete Products:
route.get("/deleteProduct",(req,res)=>{
   var productObject = req.query;
   
   productOperations.delete(productObject).then(data=>{
       if(data == null){
            res.json({"status":404});
       }
       else{
            res.json({"status":200});
       }
   }).catch(err=>res.json({"status":503}))
});

//Search Products:
route.get("/searchProduct",(req,res)=>{
    var productObject = req.query;
    
    productOperations.search(productObject).then(data=>{
        if(data == null){
         res.json({"status":404});
        }
        else{
         res.json({"status":200,"doc":data});
        }
    }).catch(err=>res.json({"status":503}))
 });

module.exports = route;