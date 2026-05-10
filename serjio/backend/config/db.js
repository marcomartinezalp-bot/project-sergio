require("dotenv").config();
const mongoose = require("mongoose");

const mongoUri = process.env.mongodb_uri || "mongodb://localhost:27017/serjio";

mongoose.connect(mongoUri)
.then(() => console.log("✓ MongoDB conectado correctamente a:", mongoUri))
.catch(err => console.log("✗ Error conectando a MongoDB:", err.message));

module.exports = mongoose;