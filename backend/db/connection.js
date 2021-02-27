const mongoose = require("mongoose");

mongoose.set("useNewUrlParser",true);
mongoose.set("useCreateIndex",true);
mongoose.set("useUnifiedTopology",true);
mongoose.set("useFindAndModify",false);

mongoose.connect("mongodb+srv://amaDB:ama_12345@amadb.zuy2w.mongodb.net/AMAdb?retryWrites=true&w=majority");

module.exports = mongoose;