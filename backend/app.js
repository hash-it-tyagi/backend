const express = require("express");
const cors = require("cors");
const chalk = require("chalk");

//Custom Modules:
const adminOperations = require("./db/models/admin.model");
const jwtObject = require("./utils/jwt");
//const logger = require("./utils/logger");

//App:
const app = express();

//Static File Serving:
app.use(express.static("public"));
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//Middleware:
app.use((req,res,next)=>{
    var reqUrl = req.url;
    var reqMethod = req.method;
    
    console.log(chalk.blue("Request Url is: "),reqUrl);
    console.log(chalk.blue("Request Method is: "),reqMethod);
    next();
});

//Admin Login:
app.post("/adminLogin",(req,res)=>{
    var adminObject = req.body;

    adminOperations.searchAdmin(adminObject).then(data=>{
        if(data == null){
            res.json({"status":404});
        }
        else{
            let token = jwtObject.generateToken(adminObject.username);
            adminOperations.addToken(adminObject,token).then(data=>res.json({"status":200,"token":token}))
            .catch(err=>res.json({"status":503}));
        }
    }).catch(err=>res.json({"status":503}));
});

//Get Product Category:
app.use("/admindashboard",require("./route/admin-dashboard.route"));

//Products:
app.use("/products",require("./route/products.route"));

//Server:
var port = 1234;
app.listen(process.env.PORT || port,()=>{
    console.log(chalk.magenta(`Server is running at port: ${port}`));
});