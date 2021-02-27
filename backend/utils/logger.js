const winston = require("winston");
const path = require("path");

var parentPath = path.normalize(__dirname + "/..");
var inputPath = path.join(parentPath,"logs/app.input.log");
var outputPath = path.join(parentPath,"logs/app.output.log");
var requestPath = path.join(parentPath,"logs/app.request.log");
var methodPath = path.join(parentPath,"logs/app.method.log");
var consolePath = path.join(parentPath,"logs/app.console.log");
var errorPath = path.join(parentPath,"logs/app.error.log");

const myLevels = {
    input:0,
    output:1,
    request:2,
    method:3,
    console:4
};

const configureObject = {
    format:winston.format.combine(
        //winston.format.colorize({all:true}),
        winston.format.timestamp({format:"DD-MM-YYYY HH:mm:ss"}),
        winston.format.prettyPrint(),
    ),
    levels:myLevels,
    transports:[
        new winston.transports.File({
            filename:inputPath,
            level:"input"
        }),
        new winston.transports.File({
            filename:outputPath,
            level:"output"
        }),
        new winston.transports.File({
            filename:requestPath,
            level:"request"
        }),
        new winston.transports.File({
            filename:methodPath,
            level:"method"
        }),
        new winston.transports.File({
            filename:consolePath,
            level:"console"
        }),
        new winston.transports.File({
            filename:errorPath,
            level:"error"
        })
    ]
};

winston.addColors({
    input:"green",
    output:"green",
    request:"blue",
    method:"gray",
    console:"magenta",
    error:"red"
});

const logger = winston.createLogger(configureObject);

module.exports = logger;