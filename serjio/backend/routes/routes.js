const express = require("express");
const router = express.Router();

const userCtrl = require("../controllers/usuarioController");

router.post("/usuarios",userCtrl.crearUsuario);
router.get("/usuarios",userCtrl.obtenerUsuarios);

module.exports = router;
