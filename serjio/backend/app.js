require("dotenv").config();
const express = require("express");
const app = express();
require("./config/db")

app.use(express.json());

const routes = require("./routes/routes");
app.use("/api", routes);

app.listen(process.env.port || 3000,() => {
    console.log(`servidor corriendo en puerto ${process.env.port || 3000}`);
});
// agregar cors y morgan para desarrollo   
const cors = require("cors");
const morgan = require("morgan");  
app.use(cors());
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}
