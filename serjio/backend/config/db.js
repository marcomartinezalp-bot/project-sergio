const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/")
.then(() => console.log("mongoconectado"))
.catch(err => console.log(err));

module.exports = mongoose;