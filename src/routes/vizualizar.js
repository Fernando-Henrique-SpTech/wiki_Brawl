var express = require("express");
var router = express.Router();
var vizualizarController = require("../controllers/vizualizarController");

router.put("/vizualizar/:idUsuario", function (req, res) {
    vizualizarController.vizualizar(req, res);
});


module.exports = router;