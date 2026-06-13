require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

// Conectar a la base de datos
require("./config/db");

// Middleware
app.use(cors());
app.use(express.json());
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

// Rutas
const routes = require("./routes/routes");
app.use("/api", routes);

// Iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`✓ servidor corriendo en puerto ${PORT}`);
});
