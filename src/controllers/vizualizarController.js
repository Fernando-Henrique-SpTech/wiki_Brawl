var vizualizarModel = require("../models/vizualizarModel");

function vizualizar(req, res) {
    var pagina = req.body.pagina;
    var idUsuario = req.params.idUsuario;

    vizualizarModel.vizualizar(idUsuario, pagina)
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
    vizualizar
}