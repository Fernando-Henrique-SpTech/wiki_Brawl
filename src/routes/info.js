var express = require("express");
var router = express.Router();
var infoController = require("../controllers/infoController");

router.post("/info/:idUsuario", function (req, res) {
    infoController.info(req, res);
})


module.exports = router;