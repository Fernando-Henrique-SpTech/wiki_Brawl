var infoModel = require("../models/infoModel");

function info(req, res) {
    var idUsuario = req.params.idUsuario;

    infoModel.info(idUsuario)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );

}
module.exports = {
    info
}